export default interface UserInfo {
  reference_uuid: string;
  user_data: {
    [key: string]: unknown;
  };
}
