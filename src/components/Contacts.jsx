import axios from "axios";
import { useFormik } from "formik";
import { toast } from "react-toastify";
import * as Yup from "yup";

const STYLE_INPUT =
  "w-full lg:my-3 my-4 rounded-lg bg-slate-800 p-4 border-2 border-fuchsia-800 b_glow text-xl text-slate-500";

// eslint-disable-next-line react/prop-types
const Contacts = ({ language }) => {
  const validationSchema = Yup.object().shape({
    name: Yup.string().required(
      language ? "Name mandatory field!" : "Имя обязательное поле!"
    ),
    email: Yup.string()
      .email(
        language
          ? "Invalid email address!"
          : "Неверный адрес электронной почты!"
      )
      .required(
        language ? "Email mandatory field!" : "Почта обязательное поле!"
      ),
    message: Yup.string().required(
      language ? "Message mandatory field!" : "Сообщение обязательное поле!"
    ),
  });

  const onSubmit = async (values, { resetForm }) => {
    toast
      .promise(
        axios.post(
          "https://breakable-tick-stole.cyclic.app/api/v1/send-telegram",
          values
        ),
        {
          pending: language ? "Sending data... 🕒" : "Отправляется... 🕒",
          success: language ? "Successfully sent 👌" : "Успешно отправлено 👌",
        }
      )
      .then(() => {
        resetForm();
      })
      .catch((error) => {
        toast.error(error.message);
      });
  };

  const { handleSubmit, values, handleChange, errors } = useFormik({
    initialValues: {
      name: "",
      email: "",
      message: "",
    },
    validateOnChange: false,
    onSubmit,
    validationSchema,
  });

  const showErrors = (errors) => {
    let errorMessage = null;

    if (Object.keys(errors).length > 1) {
      errorMessage = language
        ? "Please fill in all fields!"
        : "Пожалуйста, заполните все поля!";
    } else if (errors?.name) {
      errorMessage = errors?.name;
    } else if (errors?.age) {
      errorMessage = errors?.age;
    } else if (errors?.email) {
      errorMessage = errors?.email;
    } else if (errors?.password) {
      errorMessage = errors?.password;
    }

    return errorMessage;
  };

  return (
    <section
      id="Contacts"
      className="p-4 lg:p-20 flex flex-col items-center justify-center"
    >
      <h1
        data-aos="fade-left"
        className="text-[52px] font-semibold mb-20 leading-normal uppercase text-fuchsia-500"
      >
        {language ? "Contact Me" : "Написать мне"}
      </h1>

      <form onSubmit={handleSubmit} className="flex flex-col gap-9 lg:w-1/2">
        <div className="lg:flex gap-6">
          <input
            className={STYLE_INPUT}
            placeholder={language ? "Enter Your Name" : "Напишите ваше имя"}
            type="text"
            name="name"
            onChange={handleChange}
            value={values.name}
          />

          <input
            className={STYLE_INPUT}
            placeholder={language ? "Enter Your Email" : "Напишите вашу почту"}
            type="email"
            name="email"
            onChange={handleChange}
            value={values.email}
          />
        </div>

        <textarea
          className={`${STYLE_INPUT} resize-none`}
          placeholder={
            language ? "Write You Message..." : "Напишите ваше сообщение"
          }
          name="message"
          cols="20"
          rows="10"
          onChange={handleChange}
          value={values.message}
        />

        {showErrors(errors) && (
          <p className="text-red-600">{showErrors(errors)}</p>
        )}

        <button
          className="neno-button shadow-xl my-6 hover:shadow-fuchsia-800/50 text-white border-2 border-fuchsia-800 bg-fuchsia-800  hover:bg-slate-900 rounded-lg py-4 px-8 uppercase relative  overflow-hidden b_glow text-xl text-bold mb-10"
          type="submit"
        >
          {language ? "Submit" : "Отправить"}
        </button>
      </form>
    </section>
  );
};

export default Contacts;
