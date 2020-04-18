function headerWriter($store: any) {
  // dynamically write header
  return {
    headers: {
      // @ts-ignore
      Authorization: `Bearer ${$store.state.login.token}`,
    },
  };
}

export default { headerWriter };
