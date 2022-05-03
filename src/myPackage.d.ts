//d.ts => declare.typescript
//js로 작성된 패키지를 이렇게 d.ts를 사용하여 typescript에게 알려주고 사용
interface Config {
  url: string;
}

declare module "myPackage" {
  function init(config: Config): boolean;
}
