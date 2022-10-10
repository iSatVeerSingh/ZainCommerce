export const GetErrorMessage = (error: any) => {
  if (typeof error === 'string') {
    return { error };
  }

  if (error.code) {
    switch (error.code) {
      case 11000:
      case 11001:
        return { error: Object.keys(error.keyValue)[0] + ' already exists' };
      default:
        return { error: 'Something went wrong' };
    }
  }

  if (error.errors) {
    const errorsData: any = {};
    for (let errName in error.errors) {
      if (error.errors[errName].message) {
        errorsData[errName] = error.errors[errName].message;
      }
    }

    return { error: errorsData };
  }

  return { error };
};
