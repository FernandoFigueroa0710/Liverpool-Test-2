const searchLiverpool = ({ key, query, max = 10 }) => {
  axios
    .get(
      "http://www.liverpool.com.mx/tienda?s=xbox&d3106047a194921c01969dfdec083925=json"
    )
    .then(response => {
      this.setState({ data: data });
    })
    .catch(error => {
      console.log("error", error);
    });
};
