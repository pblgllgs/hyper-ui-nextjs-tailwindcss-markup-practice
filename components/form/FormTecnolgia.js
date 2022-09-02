import Image from 'next/image';
import React, { useState } from 'react';
import styles from './FormTecnologia.module.css';

const FormTecnolgia = () => {
  const [imageSrc, setImageSrc] = useState('');
  const [uploadData, setUploadData] = useState('');

  const [errorName, setErrorName] = useState(false);
  const [errorMsgName, setErrorMsgName] = useState('');

  const [errorOwner, setErrorOwner] = useState(false);
  const [errorMsgOwner, setErrorMsgOwner] = useState('');

  const [errorDescription, setErrorDescription] = useState(false);
  const [errorMsgDescription, setErrorMsgDescription] = useState('');

  function handleOnChange(changeEvent) {
    const reader = new FileReader();

    reader.onload = function (onLoadEvent) {
      setImageSrc(onLoadEvent.target.result);
      setUploadData(undefined);
    };

    reader.readAsDataURL(changeEvent.target.files[0]);
  }

  const initialState = {
    name: '',
    owner: '',
    description: '',
    image: '',
  };
  const [formState, SetFormState] = useState(initialState);

  const { name, owner, description } = formState;

  const handleChange = (e) => {
    SetFormState({ ...formState, [e.target.name]: e.target.value });
  };

  const handleOnSubmit = async (event) => {
    event.preventDefault();

    if (name === '') {
      setErrorName(true);
      setErrorMsgName('El nombre es obligatorio.');
    }
    if (owner === '') {
      setErrorOwner(true);
      setErrorMsgOwner('La empresa es obligatoria.');
    }
    if (description === '') {
      setErrorDescription(true);
      setErrorMsgDescription('La descripción es obligatoria.');
      return;
    }

    const form = event.currentTarget;
    const fileInput = Array.from(form.elements).find(
      ({ name }) => name === 'file'
    );

    const formData = new FormData();

    for (const file of fileInput.files) {
      formData.append('file', file);
    }
    formData.append('upload_preset', 'iyq4szx3');

    const data = await fetch(
      'https://api.cloudinary.com/v1_1/pblgllgs/image/upload',
      {
        method: 'POST',
        body: formData,
      }
    ).then((r) => r.json());
    setImageSrc(data.secure_url);
    setUploadData(data);
    const myHeaders = new Headers();
    myHeaders.append('Content-Type', 'application/json');
    const requestOptions = {
      method: 'POST',
      headers: myHeaders,
      body: JSON.stringify({ ...formState, image: data.url }),
    };

    await fetch(
      'https://backend-tecnologias.vercel.app/api/v1/tecnologia',
      requestOptions
    );
    SetFormState(initialState)
  };

  return (
    <div className={styles.container}>
      <section className="bg-gray-100">
        <div className="px-4 py-16 mx-auto max-w-screen-xl sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 gap-x-16 gap-y-8 lg:grid-cols-5">
            <div className="lg:py-12 lg:col-span-2">
              <p className="max-w-xl text-lg">
                {!uploadData
                  ? 'Agregar una nueva tecnologia'
                  : 'Tecnología agregada!'}
              </p>
              {uploadData && (
                <Image src={imageSrc} alt={'img'} width={400} height={400} />
              )}
              {/* <code>
                <pre>{JSON.stringify(formState, null, 2)}</pre>
              </code> */}
            </div>

            <div className="p-8 bg-white rounded-lg shadow-lg lg:p-12 lg:col-span-3">
              <form
                method="post"
                onSubmit={handleOnSubmit}
                className="space-y-4"
              >
                <div>
                  <label className="sr-only" htmlFor="name">
                    Name
                  </label>
                  <input
                    className="w-full p-3 text-sm border-gray-200 rounded-lg"
                    placeholder="Name"
                    type="text"
                    name="name"
                    value={name}
                    onChange={handleChange}
                  />
                  {errorName && (
                    <span className={styles.errorMsg}>{errorMsgName}</span>
                  )}
                </div>

                <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                  <div>
                    <label className="sr-only" htmlFor="owner">
                      Owner
                    </label>
                    <input
                      className="w-full p-3 text-sm border-gray-200 rounded-lg"
                      placeholder="Empresa"
                      type="text"
                      name="owner"
                      value={owner}
                      onChange={handleChange}
                    />
                    {errorOwner && <span>{errorMsgOwner}</span>}
                  </div>
                </div>
                <div>
                  <label className="sr-only" htmlFor="message">
                    Descripción
                  </label>
                  <textarea
                    className="w-full p-3 text-sm border-gray-200 rounded-lg"
                    placeholder="Descripción"
                    rows="8"
                    name="description"
                    value={description}
                    onChange={handleChange}
                  ></textarea>
                  {errorDescription && <span>{errorMsgDescription}</span>}
                </div>

                <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                  <div>
                    <input
                      className="w-full p-3 text-sm border-gray-200 rounded-lg"
                      placeholder="Image"
                      type="file"
                      name="file"
                      onChange={handleOnChange}
                    />
                  </div>
                </div>

                <div className="mt-4">
                  <button
                    type="submit"
                    className="inline-flex items-center justify-center w-full px-5 py-3 text-white bg-black rounded-lg sm:w-auto"
                  >
                    <span className="font-medium"> Guardar </span>

                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="w-5 h-5 ml-3"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M14 5l7 7m0 0l-7 7m7-7H3"
                      />
                    </svg>
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default FormTecnolgia;
