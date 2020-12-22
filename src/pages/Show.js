import React, { useEffect } from "react";
import { useParams, useState } from "react-router-dom";
import { apiGet } from "../misc/config";

const Show = () => {
  const { id } = useParams();

  const [show, setShow] = useState(null);

  useEffect(() => {
    apiGet(`/shows/${id}?embed[]=season&embed[]=cast`).then((results) => {
      setShow(results);
    });
  }, [id]);

  return <div>This is Show page</div>;
};

export default Show;
