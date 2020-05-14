import React, { useState } from "react";
import { useForm } from "react-hook-form";
import api from "../../io/api";

const InputQuiz = ({ questions, quizname, userid }) => {
  const [result, setResult] = useState(0);
  const { register, handleSubmit, watch, errors } = useForm();
  const onSubmit = async (data) => {
    let scoreCount = 0;

    if (data.question1) {
      if (data.q1Answer === data.question1) {
        scoreCount++;
      }
    }
    if (data.question2) {
      if (data.q2Answer === data.question2) {
        scoreCount++;
      }
    }
    if (data.question3) {
      if (data.q3Answer === data.question3) {
        scoreCount++;
      }
    }
    if (data.question4) {
      if (data.q4Answer === data.question4) {
        scoreCount++;
      }
    }
    if (data.question5) {
      if (data.q5Answer === data.question5) {
        scoreCount++;
      }
    }
    if (data.question6) {
      if (data.q6Answer === data.question6) {
        scoreCount++;
      }
    }
    if (data.question7) {
      if (data.q7Answer === data.question7) {
        scoreCount++;
      }
    }
    if (data.question8) {
      if (data.q8Answer === data.question8) {
        scoreCount++;
      }
    }
    if (data.question9) {
      if (data.q9Answer === data.question9) {
        scoreCount++;
      }
    }
    const payload = {
      id: userid,
      quiz_name: quizname,
      results: scoreCount,
    };
    const { status } = await api.post("/result", payload);
    if (status === 200) {
      return setResult(scoreCount);
    }
    return window.alert("something went wrong saving your results");
  };

  return (
    <>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="row">
          {/* {questions.map((question, index) => {
            return (
              <div key={index} className="col">
                <label>{question.question} =</label>
                <input
                  name="q1Answer"
                  hidden
                  type="text"
                  value={question.answer}
                  ref={register}
                />
                <input name="question1" defaultValue="" ref={register} />
              </div>
            );
          })} */}
          <div className="col">
            <label>12 - 8 =</label>
            <input
              name="q1Answer"
              hidden
              type="text"
              value="4"
              ref={register}
            />
            <input name="question1" defaultValue="" ref={register} />
          </div>
          <div className="col">
            <label>19 - 10 =</label>
            <input
              name="q2Answer"
              hidden
              type="text"
              value="9"
              ref={register}
            />
            <input name="question2" defaultValue="" ref={register} />
          </div>
          <div className="col">
            <label>26 - 18 =</label>
            <input
              name="q3Answer"
              hidden
              type="text"
              value="8"
              ref={register}
            />
            <input name="question3" defaultValue="" ref={register} />
          </div>
          <div className="col">
            <label>56 - 31 =</label>
            <input
              name="q4Answer"
              hidden
              type="text"
              value="25"
              ref={register}
            />
            <input name="question4" defaultValue="" ref={register} />
          </div>
          <div className="col">
            <label>85 - 69 =</label>
            <input
              name="q5Answer"
              hidden
              type="text"
              value="16"
              ref={register}
            />
            <input name="question5" defaultValue="" ref={register} />
          </div>
          <div className="col">
            <label>44 - 52 =</label>
            <input
              name="q6Answer"
              hidden
              type="text"
              value="-8"
              ref={register}
            />
            <input name="question6" defaultValue="" ref={register} />
          </div>
          <div className="col">
            <label>160 - 92 =</label>
            <input
              name="q7Answer"
              hidden
              type="text"
              value="68"
              ref={register}
            />
            <input name="question7" defaultValue="" ref={register} />
          </div>
          <div className="col">
            <label>190 - 226 =</label>
            <input
              name="q8Answer"
              hidden
              type="text"
              value="-36"
              ref={register}
            />
            <input name="question8" defaultValue="" ref={register} />
          </div>
          <div className="col">
            <label>2657 - 1791 =</label>
            <input
              name="q9Answer"
              hidden
              type="text"
              value="866"
              ref={register}
            />
            <input name="question9" defaultValue="" ref={register} />
          </div>
        </div>
        <br />
        <div className="text-center">
          <input type="submit" />
        </div>
        questions you've got right: <b>{result}</b> out of <b>9</b>.
      </form>
    </>
  );
};

export default InputQuiz;
