declare namespace Color {
    function toHex(str: string): string;
    function toRgb(hexStr: string, asArray?: boolean): string | string[];
    function getType(colorStr: string): string | undefined;
}

export = Color;
