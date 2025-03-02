import React, { useState, useRef } from 'react';
import styled from 'styled-components';

export const Form = () => {
  const [formData, setFormData] = useState({
    to: 'chebchoub1337@gmail.com',
    subject: '',
    text: ''
  });


  const SendEmail = async (event) => {
    event.preventDefault();
    console.log('Hello sender!!');
    console.log(formData);
    try {
      const response = await fetch('http://localhost:5050/send-mail', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData)
      });

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      alert("Email sent successfully!");
      
      // Reset input fields visually
      setFormData({
        to: 'chebchoub1337@gmail.com',
        subject: '',
        text: ''
      });
            
    } catch (error) {
      console.error('Error:', error);
    }
  };

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value
    }));
  };

  return (
    <StyledWrapper>
      <div className="flip-card__front w-[350px]">
        <div className="title">Get in touch</div>
        <form onSubmit={SendEmail} action="" className="flip-card__form">
          <input
            value={formData.subject}
            onChange={handleChange}
            ref={subjectRef}  // Reference input field
            type="text"
            placeholder="Subject"
            name="subject"
            className="flip-card__input w-[100%]"
            required
          />
          <textarea
            value={formData.text}
            onChange={handleChange}
            ref={textRef}  // Reference input field
            className="textarea w-[100%]"
            id="w3review"
            type="text"
            placeholder="..."
            name="text"
            rows="7"
            cols="25"
            required
          ></textarea>
          <button type="submit" className="flip-card__btn">Send</button>
        </form>
      </div>
    </StyledWrapper>
  );
};

const StyledWrapper = styled.div`
  .flip-card__front {
    --input-focus: #fff;
    --font-color: #323232;
    --font-color-sub: #666;
    --bg-color: #fff;
    --bg-color-alt: #666;
    --main-color: #323232;
  }

  .flip-card__front {
    padding: 20px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    -webkit-backface-visibility: hidden;
    backface-visibility: hidden;
    background: #E1DACE;
    gap: 20px;
    border: 2px solid var(--main-color);
    box-shadow: 4px 4px var(--main-color);
  }

  .flip-card__form {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 20px;
  }

  .title {
    margin: 20px 0 20px 0;
    font-size: 25px;
    font-weight: 900;
    text-align: center;
    color: var(--main-color);
  }

  .flip-card__input {
    border: 2px solid var(--main-color);
    background-color: var(--bg-color);
    box-shadow: 4px 4px var(--main-color);
    font-size: 15px;
    font-weight: 600;
    color: var(--font-color);
    padding: 5px 10px;
    outline: none;
  }

  .textarea {
    border: 2px solid var(--main-color);
    background-color: var(--bg-color);
    box-shadow: 4px 4px var(--main-color);
    font-size: 15px;
    font-weight: 600;
    color: #323232;
    padding: 5px 10px;
    outline: none;
  }

  .flip-card__input::placeholder {
    color: var(--font-color-sub);
    opacity: 0.8;
  }

  .flip-card__input:focus {
    border: 2px solid var(--input-focus);
  }

  .flip-card__btn:active,
  .button-confirm:active {
    box-shadow: 0px 0px var(--main-color);
    transform: translate(3px, 3px);
  }

  .flip-card__btn {
    margin: 20px 0 20px 0;
    width: 120px;
    height: 40px;
    border: 2px solid var(--main-color);
    background-color: var(--bg-color);
    box-shadow: 4px 4px var(--main-color);
    font-size: 17px;
    font-weight: 600;
    color: var(--font-color);
    cursor: pointer;
  }
`;

export default Form;
