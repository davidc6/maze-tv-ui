const stripTags = (str: string) => {
  return str ? str.replace(/(<([^>]+)>)/gi, "") : str
}

export {
  stripTags
}
