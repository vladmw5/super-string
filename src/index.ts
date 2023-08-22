export class SuperString extends String {
  private readonly normalized: string;

  constructor(str: string) {
    super(str);
    this.normalized = SuperString.normalize(str);
  }

  private static normalize(str: string) {
    return [...str.split('')].sort().join('');
  }

  public equalsTo(other: string): boolean {
    return this.normalized === SuperString.normalize(other);
  }

  public static are(str1: string, str2: string): boolean {
    return SuperString.normalize(str1) === SuperString.normalize(str2);
  }
}
