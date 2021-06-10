import { useEffect } from 'react';

const FireBaseAuthResponseHandler = ({
  loading,
  error,
  values,
  initialValues,
  setSubmitting,
  resetForm,
}) => {
  const isFormFiled = JSON.stringify(values) !== JSON.stringify(initialValues);

  const clearModal = () => {
    if (isFormFiled) {
      setSubmitting(false);
      resetForm();
    }
  };

  useEffect(() => {
    if (!loading) {
      if (!error) {
        clearModal();
      }
      setSubmitting(false);
    }
  }, [loading]);

  return <></>;
};

export default FireBaseAuthResponseHandler;
