export type TStringifiedObject = {
    [key: string]: string
}

export type TField = {
    id: string,
    type: string
}

export type TSidebarProps = {
    addField: (type: string) => void
}

export type TImageUploader = {
    id: string;
    classes: TStringifiedObject
}

export type TBox = {
    label: string
    type: string,
    onDrop: (type: string) => void
}