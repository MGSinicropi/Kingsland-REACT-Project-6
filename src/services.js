
export const getPosts = async()=>{
  const url = 'http://localhost:9999/api/blog/';
  const res = await fetch(url);
  const posts = await res.json();
  return posts;
}  
  
  export const signup = async(email, password)=>{
    const url = 'http://localhost:9999/api/user/signup';
    const body = JSON.stringify({email, password});
    const headers = {'Content-Type':'application/json'};
    const res = await fetch(url,{ method:'POST', body, headers})
    const result = await res.json()
    return result;
  };
  
  export const login = async(email, password)=>{

    const url = 'http://localhost:9999/api/user/login';
    const body = JSON.stringify({email, password});
    const headers = {'Content-Type':'application/json'};
    const res = await fetch(url,{ method:'POST', body, headers})
    const result = await res.json()
    return result;
  };
  
export const addPost = async(description)=>{
  const url = 'http://localhost:9999/api/blog/';
  const body = JSON.stringify({description});
  const headers = {'Content-Type':'application/json', Authorization:`Bearer ${localStorage.getItem('token')}`};
  const res = await fetch(url,{ method:'POST', body, headers})
  const result = await res.json()
  return result;
};