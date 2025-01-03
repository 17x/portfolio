const GetContent: (url: string) => Promise<string> = async (url: string) => {
  try {
    return await (await fetch(url)).text();
  } catch (e) {
    return e
  }
}

export default GetContent