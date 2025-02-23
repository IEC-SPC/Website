import React from "react";

const Form: React.FC = () => {
    const [result, setResult] = React.useState<string>("");

    const onSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        setResult("Sending....");
        const formData = new FormData(event.currentTarget);

        formData.append("access_key", "14342542-8be2-4bff-855d-bb740c80952c");

        const response = await fetch("https://api.web3forms.com/submit", {
            method: "POST",
            body: formData
        });

        const data = await response.json();

        if (data.success) {
            setResult("Form Submitted Successfully");
            event.currentTarget.reset();
        } else {
            console.log("Error", data);
            setResult(data.message);
        }
    };

    return (
        <div className="flex flex-col m">
            <form onSubmit={onSubmit}>
                <div className="flex gap-4">
                    <input type="text" name="name" placeholder="NAME" className='bg-[#D99D9] rounded-2xl' required />
                    <input type="email" name="email" placeholder="EMAIL" className='bg-[#D9D9D9]' required />
                </div>
                <textarea name="message" className='bg-[#D9D9D9]' required></textarea>
                <button type="submit">Submit Form</button>
            </form>
            <span>{result}</span>
        </div>
    );
};

export default Form;
