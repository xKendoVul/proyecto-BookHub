import axios from "axios";
import { useEffect, useState } from "react";
import { getAllBooks } from "./task.api";

export const getAllGenres = () => {
    return axios.get('http://localhost:8000/api/genres/')
};