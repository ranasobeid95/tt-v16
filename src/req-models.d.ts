/**
 * Register request body
 */
interface RegisterRequest {
  name: string;
  surName: string;
  password: string;
  genderType?: number;
  fbUserId: string;
  dateOfBirth?: string;
  emailOrPhoneNumber: string;
  alpha2: string;
  preferredLanguage?: number;
  deviceDescription: string;
  deviceToken: string;
  deviceType: number;
  isEarthLink: boolean;
  isScopeSky: boolean;
  isHalaSat: boolean;
}
/**
 * Validate scratch card request
 */

interface validateScratchCardRequest {
  uniqueSerialNumber: string;
  deviceToken: string;
  deviceDescription: string;
  deviceType: number;
  languageId: number;
}

/**
 * communication channels request body
 */
interface communicationChannelsRequest {
  emailOrPhoneNumber: string;
}

/**
 * Forget password code request
 response body
 */
interface ForgetPasswordCodeReq {
  accountId: number;
  channel: number;
}

/**
 * verify forget password code request
 response body
 */
interface verifyForgetPasswordCodeReq {
  accountId: number;
  verificationCode: number;
}
/**
 * send code to reset pin request
 response body
 */
interface sendForgetPinCodeReq {
  profileId: number;
  channel: number;
}
/**
 * verify forget pin code request
 response body
 */
interface verifyForgetPinCodeReq {
  profileId: number;
  verificationCode: number;
}

/**
 * Reset password request body
 */
interface ResetPasswordRequest {
  accountId: number;
  newPassword: string;
  verificationCode: string;
}

/**
 * Reset pin request body
 */
interface ResetPinRequest {
  profileId: number;
  newPin: string;
  verificationCode: string;
}

/**
 * Add whatsApp number request
 */

interface addWhatsAppNumberRequest {
  whatsAppNumber: string;
  languageId: number;
}
/**
 * Update whatsApp number request
 */

interface changeWhatsAppNumberRequest {
  whatsAppNumber: string;
  password: string;
  languageId: number;
}

interface RemoveWhatsAppRequest {
  password: string;
}

/**
 * Verify whatsApp number request
 */

interface VerifyWhatsAppNumberRequest {
  verificationCode: string;
  languageId: number;
}

/**
 * Login request body
 */
interface LoginRequest {
  password: string;
  deviceToken: string;
  deviceDescription: string;
  deviceType: number;
  emailOrPhoneNumber: string;
  isEarthLink: boolean;
  isScopeSky: boolean;
  isHalaSat: boolean;
}

/**
 * Social sign up request body
 */
interface SocialSignUpRequest {
  token: string;
  socialUserId: string;
  deviceToken: string;
  deviceDescription: string;
  deviceType: number;
  isEarthLink: boolean;
  isScopeSky: boolean;
  isHalaSat: boolean;
}

/**
 *  Mtv sign up request body
 */
interface MtvSignUpRequest {
  email: string;
  password: string;
  deviceToken: string;
  deviceDescription: string;
  deviceType: number;
}

/**
 *  Mtv sign in request body
 */
interface MtvSignInRequest {
  email: string;
  password: string;
  deviceToken: string;
  deviceDescription: string;
  deviceType: number;
  isEarthLink: boolean;
  isScopeSky: boolean;
  isHalaSat: boolean;
}

/**
 * MTV add password request body
 */
interface MtvAddPasswordRequest {
  mtvId: string;
  password: string;
  deviceToken: string;
  deviceDescription: string;
  deviceType: number;
  name: string;
  isEarthLink: boolean;
  isScopeSky: boolean;
  isHalaSat: boolean;
}

/**
 * Social log in request body
 */
interface SocialSignInRequest {
  token: string;
  socialId: string;
  deviceToken: string;
  deviceDescription: string;
  deviceType: number;
  isEarthLink: boolean;
  isScopeSky: boolean;
  isHalaSat: boolean;
}

/**
 * Social add password after sign up body
 */
interface SocialAddPassword {
  isFb: boolean;
  socialMediaId: string;
  socialMediaToken: string;
  password: string;
  deviceToken: string;
  deviceDescription: string;
  deviceType: number;
  isEarthLink: boolean;
  isScopeSky: boolean;
  isHalaSat: boolean;
}

/**
 * Pagination request body (for movies/ series...)
 */
interface PaginationRequest {
  from: number;
  size: number;
  itemType?: number;
  languageId?: number;
}

/**
 * Search request body (for movies/ series...)
 */
interface SearchRequest extends PaginationRequest {
  pattern: string;
}

/**
 * Select Subscription request body
 */
interface SelectSubscriptionRequest {
  subscriptionId?: number;
  paymentMethodType?: number;
  uniquePromoCode?: string;
  deviceType?: number;
  redirectUrl?: string;
  phoneNumber?: string;
  unCancel?: boolean;
}

/**
 * Change Subscription request body
 */
interface ChangeSubscriptionRequest {
  subscriptionId: number;
  paymentMethodType: number;
  redirectUrl?: string;
  phoneNumber?: string;
  uniquePromoCode?: string;
  deviceType?: number;
}

/**
 * Change Payment request body
 */
interface ChangePaymentRequest {
  paymentMethodType: number;
  redirectUrl: string;
}

interface GetUserSubscriptionRequest {
  id: number;
  languageId: number;
  subscriptionEndDate: string;
}

/**
 * Concert Details request body
 */
interface ConcertDetailsRequest {
  id: number;
  languageId?: number;
}

interface ConcertDetailsResponse {
  id: number;
  name?: string;
  description?: string;
  landscapeThumbnail?: string;
  singers?: string;
  singersList?: [];
}

/**
 * Movie Details request body
 */
interface MovieDetailsRequest {
  movieId: number;
  isSearch: boolean;
}

/**
 * Serie Details request body
 */
interface SerieDetailsRequest {
  serieId: number;
  isSearch: boolean;
}

/**
 * LikeUnlike request body
 */
interface LikeUnlikeRequest {
  serieId?: number;
  movieId?: number;
  episodeId?: number;
  musicId?: number;
  languageId?: number;
  isDislike?: boolean;
  remove?: boolean;
  itemType?: number;
}

/**
 * Change password request body
 */
interface ChangePasswordRequest {
  oldPassword: string;
  newPassword: string;
  emailOrPhoneNumber: string;
}

/**
 * Select profile request body
 */
interface SelectProfileRequest {
  password?: string;
  profileId: number;
}

/**
 * Add profile request body
 */
interface AddProfileRequest {
  pin: string;
  profileName: string;
  preferredLanguage: number;
  profileType: number;
  avatarId: number;
}

/**
 * Edit profile request body
 */
interface EditProfileRequest {
  profileId: number;
  avatarId: number;
  profileType: number;
  name: string;
  pin: string;
  changePin: boolean;
}

/**
 * Manage my list request body (add and remove items from user's list)
 */
interface ManageMyListRequest {
  movieId?: number;
  serieId?: number;
  musicId?: number;
  musicIds?: number[];
  albumId?: number;
  episodeId?: number;
  remove: boolean;
  languageId?: number;
}

/**
 * Continue wathing request body
 */
interface ContinueWatchingRequest {
  episodeId?: number;
  movieId?: number;
  musicId?: number;
  elapsedTime: number;
  remove: boolean;
  videoId?: number;
  firstTime?: boolean;
  deviceType?: number;
  playedContinuously?: boolean;
  type?: number;
  isVideoClip?: boolean;
  id?: number;
}
/**
 * Get items request body
 */
interface GetItemsRequest {
  itemType?: number;
  isMovieSerie?: boolean;
  from: number;
  size: number;
  languageId?: number;
}

/**
 * Payment details request body
 */
interface PaymentDetailsRequest {
  cardDetails: string;
  paymentMethodType: number;
  emailOrPhoneNumber: string;
  code: string;
}

/**
 * Rails request body
 */
interface RailsRequest extends PaginationRequest {
  railIds?: number[];
  deviceRailType?: number;
  isWeb?: boolean;
}

/**
 * RailViewMore request body
 */
interface RailContentRequest extends PaginationRequest {
  id: number;
}

/**
 * Manage playlist request
 */
interface ManagePlaylistRequest {
  id?: number;
  name: string;
}

/**
 * Manage my playlist request
 */
interface ManageMyPlaylistRequest {
  id: number;
  musicId?: number;
  albumId?: number;
  musicIds?: number[];
}

interface SearchMusicRequest {
  pattern: string;
  playlistId?: number;
  from?: number;
  size?: number;
  languageId?: number;
}

interface ManageMyPlaylistReq {
  playlistsIds: number[];
  songsIds?: number[];
  albumId?: number;
  singerId?: number;
}

/**
 * Verify checkout request
 */
interface CheckoutRequest {
  resultIndicator?: string;
  version?: string;
  isChangingPayment: boolean;
  isChangingPlan?: boolean;
  paymentMethodType: number;
  checkoutId?: string;
  token?: string;
  languageId?: number;
}

/**
 * Contact support request
 */
interface SupportRequest {
  name: string;
  email: string;
  message: string;
}

// interface liveStreamRequest {
//   itemType: number,
// }

/**
 * Live Streaming request
 */
interface LiveStreamingRequest {
  startDate: string;
}

/**
 * Change Audio/Subtitle Request
 */
interface ChangeAudioSubtitleRequest {
  episodeId: number;
  movieId: number;
  audioType: string;
  subtitleType: string;
}
interface LiveStreamingDetailsRequest {
  startDate: string;
  liveStreamingId: number;
}

interface GetPartnerRequest {
  from: number;
  size: number;
  languageId: number;
  itemType: number;
}

interface PayBySketchCardRequest {
  uniqueSerialNumber: string;
  deviceToken: string;
  deviceDescription: string;
  deviceType: number;
  languageId: number;
}

interface ReorderRequest {
  newOrder: any[];
  playlistId?: string;
}

interface FollowUnfollowRequest {
  singerId: string;
  remove: boolean;
}
