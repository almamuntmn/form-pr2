const SimpleForm = () => {

const handleSubmit = e => {
    e.preventDefault();
    console.log(e.target.Name.value);
    console.log(e.target.email.value);
    console.log(e.target.password.value);

}

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <input type="text" name="Name" />
                <br />
                <input type="email" name="email" />
                <br />
                <input type="password" name="password" />
                <br />
                <hr />
                <input type="submit" value="Submit" />
            </form>
        </div>
    );
};

export default SimpleForm;