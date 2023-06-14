import { Injectable } from '@nestjs/common';
import { OnEvent } from '@nestjs/event-emitter';
import { EventEnums, RecordEvent } from '../../../../../share-db/events';
import { TriggerTypeEnums } from '../../../enums/trigger-type.enum';
import type { IConstSchema } from '../../action-core';
import { TriggerCore } from '../trigger-core';

export interface ITriggerRecordCreatedSchema extends Record<string, unknown> {
  tableId: IConstSchema;
}

export interface ITriggerRecordCreatedOptions {
  tableId: string;
}

@Injectable()
export class TriggerRecordCreated extends TriggerCore<RecordEvent> {
  @OnEvent(EventEnums.RecordCreated, { async: true })
  async listenerTrigger(event: RecordEvent) {
    const { tableId, recordId, context } = event;
    const workflows = await this.getWorkflowsByTrigger(tableId, [TriggerTypeEnums.RecordCreated]);

    this.logger.log({
      message: `Listening to form record created event, Estimated number of workflows built: ${workflows?.length}`,
      tableId,
      recordId,
    });

    if (workflows) {
      for (const workflow of workflows) {
        if (!workflow.trigger || !workflow.actions) {
          continue;
        }

        const { actions, decisionGroups } = await this.splitAction(workflow.actions);

        const trigger = {
          [`trigger.${workflow.trigger.id}`]: context.snapshot?.data,
        };

        this.callActionEngine(trigger, actions, decisionGroups);
      }
    }
  }
}