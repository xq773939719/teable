import fs from 'fs';
import type { IFileNode } from '@teable-group/core';

//  TODO: need complete teable file structure
interface ITeableFile {
  title: string;
  teableList: string[];
}

export class TeableFile {
  static FORMAT = '.teable';

  public getTeableFileTree(path: string) {
    const content = this.getFileContent2JSON(path);
    return this.getFileTree(content, path);
  }
  private getFileContent2JSON(path: string) {
    if (!path.endsWith(TeableFile.FORMAT)) {
      throw new Error('file format error');
    }
    const fileContent = fs.readFileSync(path).toString();
    try {
      return JSON.parse(fileContent);
    } catch (error) {
      throw new Error('file content is not a valid json');
    }
  }

  private getFileTree(teableFileContent: ITeableFile, parentPath: string): IFileNode[] {
    return teableFileContent.teableList.map((teableName) => {
      return {
        name: teableName,
        path: parentPath + '#' + teableName,
        children: [],
        type: 'table',
        isDirectory: false,
      };
    });
  }
}