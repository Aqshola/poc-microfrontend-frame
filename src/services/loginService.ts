import { BASE_URL } from "../constant/general";

export type ParamLogin = {
  username: string;
  password: string;
};
export async function login(param: ParamLogin) {
  const formData = new FormData();
  formData.append("user", param.username);
  formData.append("pass", param.password);

  const fetcher = await fetch(`${BASE_URL}/v1/mekdi_bo/login_bo`, {
    method: "POST",
    body: formData,
  });
  const result = await fetcher.json();
  return result;
}
