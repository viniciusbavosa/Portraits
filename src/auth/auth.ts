export default function isAuthenticated() {
  const token = sessionStorage.getItem('userToken');
 
  if (!token)
    return false;
  else
    return token;
}