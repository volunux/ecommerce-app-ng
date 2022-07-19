export class EntityCrudFormControllerService<T> extends EntityCrudController<T> {

  public entityForm: FormGroup = new FormGroup({});
  protected override route: ActivatedRoute;

  constructor(protected eofbs: EntityOneFormBuilderService, protected override service: BaseCrudServiceImpl<T>, protected override router: Router) {
    super(service, router);
  } nn