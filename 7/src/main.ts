interface FileSystemNode {
    getSize(): number
};

class File implements FileSystemNode {

    size: number;

    constructor(size: number) {
        this.size = size;
    }

    getSize(): number {
        return this.size;
    }

}

class Directory implements FileSystemNode {

    children: Array<FileSystemNode>;

    constructor(children: Array<FileSystemNode>) {
        this.children = children;
    }

    getSize(): number {
        return this.children.reduce((accumilator, currentChild) => (accumilator + currentChild.getSize()), 0);
    }
}

const helloWorld = (): string => ("Hello World!");

export { helloWorld };
