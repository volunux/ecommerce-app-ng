export class AbstractEntity {


  private id: number;
  private createdOn: Date;
  private updatedOn: Date;

  constructor(data?: any) {
    if (data) {
      this.id = data.id ? data.id : undefined;
      this.createdOn = data.createdOn ? data.createdOn : new Date();
      this.updatedOn = data.updatedOn ? data.updatedOn : new Date();
    }
  }

  public getId(): number {
    return this.id;
  }

  public setId(id: number): void {
    this.id = id;
  }

  public getCreatedOn(): Date {
    return this.createdOn;
  }

  public setCreatedOn(createdOn: Date): void {
    this.createdOn = createdOn;
  }

  public getUpdatedOn(): Date {
    return this.updatedOn;
  }

  public setUpdatedOn(updatedOn: Date): void {
    this.updatedOn = updatedOn;
  }


    /**
     * Getter $id
     * @return {number}
     */
	public get $id(): number {
		return this.id;
	}

    /**
     * Getter $createdOn
     * @return {Date}
     */
	public get $createdOn(): Date {
		return this.createdOn;
	}

    /**
     * Getter $updatedOn
     * @return {Date}
     */
	public get $updatedOn(): Date {
		return this.updatedOn;
	}
}
