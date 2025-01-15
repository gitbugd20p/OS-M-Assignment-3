import { DecodeToken, EncodeToken } from "../utility/tokenUtility.js";
import * as path from "node:path";

export const TokenEncode = async (req, res) => {
    let result = EncodeToken("sam.mail@yahoo.com", "10001", "BD");
    res.json({ token: result });
};

export const TokenDecode = async (req, res) => {
    let result = DecodeToken(
        "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6InNhbS5tYWlsQHlhaG9vLmNvbSIsInVzZXJfaWQiOiIxMDAwMSIsImNvdW50cnkiOiJCRCIsImlhdCI6MTczNjkzODkzMiwiZXhwIjoxNzM5NTMwOTMyfQ.Ht7kO4-FDCfhHh8wndIVD6xAUVaFMFPrmhIb48Ua0_w"
    );
    res.json({ token: result });
};
