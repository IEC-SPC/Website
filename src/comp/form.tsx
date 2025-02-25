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
        <div className="flex flex-col w-[65%] items-center">
            <form className="flex flex-col w-full gap-4" onSubmit={onSubmit}>
                <div className="flex gap-4">
                    <input type="text" name="name" placeholder="NAME" className='input rounded-2xl bg-[#d9d9d9] placeholder:text-black w-[40%]' required />
                    <input type="email" name="email" placeholder="EMAIL" className='input rounded-2xl bg-[#d9d9d9] placeholder:text-black w-full' required />
                </div>
                <textarea name="message" placeholder="MESSAGE" className='textarea rounded-2xl h-44 placeholder:text-black bg-[#d9d9d9]' required></textarea>
                <div className="flex flex-col items-center">
                    <button type="submit" className="btn w-44 bg-[#d9d9d9] rounded-2xl">SEND MESSAGE</button>
                </div>
            </form>
            <span>{result}</span>
        </div>
    );
};

export default Form;
