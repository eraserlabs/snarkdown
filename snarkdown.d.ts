declare module "@eraserlabs/snarkdown" {
  interface Links {
    [index: string]: string;
  }
  export default function (urlStr: string, prevLinks?: Links): string;
}
