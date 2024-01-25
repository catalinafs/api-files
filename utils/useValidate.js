// const useValidate = ({ initForm }) => {
//     let formError = { ...initForm };

//     const accionValidations = (form, regex) => {
//         const keys = Object.keys(form);

//         for (let key of keys) {
//             if (!form[key]) {
//                 setFormError((props) => ({
//                     ...props,
//                     [key]: `The ${key} field is required`
//                 }));
//                 return true;
//             } else {
//                 setFormError((props) => ({
//                     ...props,
//                     [key]: ''
//                 }));
//             }

//             if (!regex[key].test(form[key])) {
//                 setFormError((props) => ({
//                     ...props,
//                     [key]: 'Wrong field'
//                 }));
//                 return true;
//             } else {
//                 setFormError((props) => ({
//                     ...props,
//                     [key]: ''
//                 }));
//             }

//             if (key === 'confirmationPassword') {
//                 if (form[key] !== form.password) {
//                     setFormError((props) => ({
//                         ...props,
//                         [key]: 'The confirmation password must be the same as the password'
//                     }));
//                     return true;
//                 } else {
//                     setFormError((props) => ({
//                         ...props,
//                         [key]: ''
//                     }));
//                 }
//             }
//         }
//     }

//     return { formError, accionValidations };
// }

// export default useValidate;
