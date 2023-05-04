const Form = ({ ...props }) => {
  console.log(props);
  return (
    <>
      <div className="form-floating mb-3">
        <input className="form-control" id={props.id} type={props.type} placeholder={props.placeholder} data-sb-validations="required" />
        <label for="name">{props.title}</label>
        <div className="invalid-feedback" data-sb-feedback="name:required">
          {props.message}
        </div>
      </div>
    </>
  );
};
export default Form;
