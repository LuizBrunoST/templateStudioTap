declare const tap: {

    init(options?: any): void;

    createLayout(type?: string): any;
    createText(text?: string): any;
    createButton(text?: string): any;
    createInput(placeholder?: string): any;
    createImage(src?: string): any;

    createScreen(): any;
    openScreen(screen: any): void;

    createToolbar(options?: {
        title?: string,
        left?: any[],
        right?: any[]
    }): any;

    createSidebar(options?: {
        header?: string,
        items?: any[]
    }): any;

    createAds(options?: {
        url: string,
        refresh?: number
    }): any;

    createPrint(target?: any, options?: any): void;

    ui: {
        toast(type: string, msg: string): void;
        snackbar(msg: string, action?: any): void;
    };

    setStorage(key: string, value: any): void;
    getStorage(key: string): any;

    database(name: string): {
        insert(obj: any): any;
        getAll(): any[];
        get(id: number): any;
        update(id: number, data: any): boolean;
        delete(id: number): void;
    };

    request(options: any): void;

    native: {
        notify(title: string, msg: string): void;
        toast(msg: string): void;
        vibrate(ms: number): void;
    };
};