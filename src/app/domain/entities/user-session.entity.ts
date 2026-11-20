export interface UserSessionEntity{
  id: number;
  username: string;
  image: string;
  accessToken: string;
  refreshToken: string;   
}