export const LOGO = 
      "https://help.nflxext.com/helpcenter/OneTrust/oneTrust_production/consent/87b6a5c0-0104-4e96-a291-092c11350111/01938dc4-59b3-7bbc-b635-c4131030e85f/logos/dd6b162f-1a32-456a-9cfe-897231c7763c/4345ea78-053c-46d2-b11e-09adaef973dc/Netflix_Logo_PMS.png";

export const USER_AVATAR = 
      "https://occ-0-4875-2186.1.nflxso.net/dnm/api/v6/vN7bi_My87NPKvsBoib006Llxzg/AAAABeuqjuQsRgqEDlibtJTI5BMf8IxhLlLOeIT6xI4TL57mqv7XHja43gx02S8pZVe8JNGRQXjnrUk1VcsTXqi83tFKPI6OR3k.png?r=bd7";        

export const BG_IMG =
      "https://assets.nflxext.com/ffe/siteui/vlv3/2f5a878d-bbce-451b-836a-398227a34fbf/web/IN-en-20241230-TRIFECTA-perspective_5ab944a5-1a71-4f6d-b341-8699d0491edd_medium.jpg";   

export const API_OPTIONS = {
      method: 'GET',
      headers: {
      accept: 'application/json',
      Authorization: "Bearer " + process.env.REACT_APP_TMDB_KEY,
      }
    }; 

export const IMG_CDN_URL = "https://image.tmdb.org/t/p/w500";

export const SUPPORTED_LANG = [
      { identifier: "en", name: "English" },
      { identifier: "hindi", name: "Hindi" },
      { identifier: "spanish", name: "Spanish" },
      { identifier: "chinese_simplified", name: "Chinese(simplified)" },
      { identifier: "chinese_traditional", name: "Chinese(traditional)" },
];

export const OPENAI_KEY = process.env.REACT_APP_OPENAI_KEY;

