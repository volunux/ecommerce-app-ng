import { AbstractEntity } from "src/app/shared/entity/abstract-entity";

export class Country extends AbstractEntity {

  private title: string;
  private description: string;

  constructor(data? : any) {
    super(data);
    if (data) {
      this.title = data.title ? data.title : undefined;
      this.description = data.description ? data.description : undefined;
    }
  }

  public getTitle(): string {
    return this.title;
  }

  public setTitle(title: string): void {
    this.title = title;
  }

  public getDescription(): string {
    return this.description;
  }

  public setDescription(description: string): void {
    this.description = description;
  }


    /**
     * Getter $title
     * @return {string}
     */
	public get $title(): string {
		return this.title;
	}

    /**
     * Getter $description
     * @return {string}
     */
	public get $description(): string {
		return this.description;
	}

}
