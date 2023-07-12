/**
 * Movie response body
 */
interface MoviesResponse {
  total: number;
  took: number;
  movies: TTItem[];
}

/**
 * Series response body
 */
interface SeriesResponse {
  total: number;
  took: number;
  series: TTItem[];
}

/**
 * validate scratch card body
 */

interface validateScratchCardResponse {
  subscriptionName: string;
  period: string;
  price: number;
  failureScratchCardCount: number;
  msg: string;
}

/**
 * Rails response body
 */
interface RailsResponse {
  total: number;
  took: number;
  rails: Rail[];
}

/**
 * Movie Details response body
 */
interface MovieDetailsResponse {
  details: DetailedMovie;
  similar: TTItem[];
  more?: TTItem[];
}

/**
 * Music Details response body
 */
interface MusicDetailsResponse {
  details: DetailedMusic;
  similar: TTItem[];
  more?: MusicItem[];
  songs: TTItem[];
}

/**
 * Artist Details response body
 */
interface ArtistDetailsResponse {
  model: DetailedArtist;
  list: TTItem[];
  total: number;
  musicRails: Rail[];
}

/**
 * Series Details response body
 */
interface SerieDetailsResponse {
  details: DetailedSerie;
  similar: TTItem[];
  more?: TTItem[];
}

/**
 * Season Details response body
 */
interface SeasonDetailsResponse {
  id: number;
  description: string;
  seasonNumber: number;
  thumbnail: string;
  serieId?: number;
  metadata?: Metadata[];
  seasonTrailers?: Trailer[];
  episodeDetails?: Episode[];
  isWatched?: boolean;
  isSelectedButton?: boolean;
}

/**
 * Category Details response body
 */
interface CategoryDetailsResponse {
  id: number;
  name: string;
  movies: TTItem[];
  series: TTItem[];
  totalMovies: number;
  totalSeries: number;
  list?: TTItem[];
  count?: number;
}

/**
 * Login response body
 */
interface LoginResponse extends IsLoggedInResponse {
  blockedTill: string;
  emailAddress: string;
  isBlocked: boolean;
  fbName: string;
  googleName: string;
  isLinkedToFb: boolean;
  isLinkedToGoogle: boolean;
  isPasswordRequired: boolean;
  preferredLanguage: number;
  tk: string;
  userName: string;
  isGenderAndBirthdateSelected?: boolean;
  mtvId?: string;
  name?: string;
  id?: number;
}

/**
 * communication channelsResponse
 response body
 */
interface communicationChannelsResponse {
  accountId: number;
  sms: boolean;
  whatsapp: boolean;
  email: boolean;
  emailAddress: string;
  phoneNumber: string;
  whatsappNumber: string;
}

/**
 * Select profile response body
 */
interface SelectProfileResponse extends ProfileResponse {
  defaultSubtitleLanguage: number;
  defaultVideoLanguage: number;
  isMasterProfile: boolean;
  msg: string;
  preferredLanguage: number;
  responseCode: number;
}

/**
 * Social sign up success interface
 */
interface SocialSignUpSuccess {
  verificationModel: SelectProfileResponse;
  loginModel: LoginResponse;
}

interface SearchDetails {
  total: number;
  rails: SearchRailResponse[];
}

interface SearchRailResponse {
  list: TTItem[];
  itemType?: number;
  total: number;
}

/**
 * Search response body
 */
interface SearchResponse {
  details: SearchDetails;
  recommendations: any;
}

/**
 * Get my items original response
 */
interface MyItemsResponse {
  count: number;
  list: TTItem[];
}

/**
 * Single carousel response
 */
interface CarouselResponse {
  actors: string;
  addedToList: boolean;
  description: string;
  disliked: boolean;
  id: number;
  itemType: number;
  liked: boolean;
  name: string;
  rating: string;
  duration?: number;
  seasonCount?: number;
  thumbnail: string;
  trailers: Trailer[];
}

/**
 * Single profile type response
 */
interface ProfileTypeResponse {
  id: number;
  type: string;
}

/**
 * Single profile response
 */
interface ProfileResponse {
  avatar: string;
  avatarId: number;
  hasPin: boolean;
  id: number;
  isMasterProfile: boolean;
  name: string;
  preferredLanguage: number;
  type: string;
  typeId: number;
  isDeleted?: boolean;
  pin?: string;
}

/**
 * Select subscription response
 */
interface SelectSubscriptionResponse {
  id?: string;
  amount?: number;
  currency?: string;
  orderId?: string;
  bankType: number;
  receiptDetails?: CheckoutResponse; //for zain cash maybe
}

/**
 * Authorization response
 */
interface BearerResponse {
  bearer: string;
  exp: number;
  msg: string;
}

/**
 * TTOrignal response
 */
interface TTOriginalResponse {
  count: number;
  list: TTItem[];
}

/**
 * CMS Preview response
 */
interface CmsPreviewResponse {
  destination: string;
  destinationId: number;
  id: number;
}

/**
 * IsLoggedIn response
 */
interface IsLoggedInResponse {
  isLoggedIn?: boolean;
  isMasterProfile: boolean;
  isVerified: boolean;
  isVip: boolean;
  profileId?: number;
  priorityOrder: number;
  canAddPlan: boolean;
  isCanceled: boolean;
  subscriptionId: number;
  subscriptionEndDate: string;
  paymentMethodType?: number;
  isLinkedToGoogle?: boolean;
  isLinkedToFb?: boolean;
  remainingDays?: number;
}

/**
 * User Info Response
 */
interface UserInfoResponse {
  name: string;
  surname: string;
  email: string;
  genderType: number;
  dateOfBirth: Date;
  phoneNumber: string;
  avatar: string;
  whatsAppNumber: string;
  isWhatsAppVerified?: boolean;
  oldWhatsAppNumber?: string;
}

/**
 * Add whatsApp number response
 */

interface addWhatsAppNumberResponse {
  blockedTill: any;
  isBlocked: boolean;
  blockedTillUtc: number;
  msg: string;
}
/**
 * Update whatsApp number response
 */

interface changeWhatsAppNumberResponse {
  blockedTill: any;
  isBlocked: boolean;
  blockedTillUtc: number;
  msg: string;
}
/**
 * Verify whatsApp number response
 */

interface VerifyWhatsAppNumberResponse {
  msg: string;
}

/**
 * Music Response
 */
interface AllMusicResponse {
  took: number;
  total: number;
  musics: MusicItem[];
}

/**
 * General config response
 */
interface GeneralConfig {
  genders?: Gender[];
  languages?: Language[];
  currentAppVersion: string;
  currentLanguageVersion: string;
  countryCode?: string;
  myTentimeId?: number;
  liveStreamingId?: number;
  partnerId?: number;
  musicMyTentimeId?: number;
  tentimeExclusiveRailId?: number;
  topHitsPlaylistId?: number;
  existRecentSearch?: boolean;
  labelIndicators?: LabelIndicator[];
  defaultAdvertisementAudioPath?: string;
  defaultAdvertisementVideoPath?: string;
  skipVideoIntro?: boolean;
}

interface LabelIndicator {
  id: number;
  name: string;
  thumbnail?: string;
  circularThumbnail?: string;
  portraitThumbnail?: string;
  squareThumbnail?: string;
}

interface Advertisement {
  audioPath: string;
  videoPath: string;
}

/**
 * Verify indicator response
 */
interface CheckoutResponse {
  date: string;
  description: string;
  msg: string;
  plan: string;
  receiptNumber: string;
  responseCode: number;
  servicePeriod: string;
  total: string;
  currency: string;
  redirectUrl?: string;
}

/**
 * Promoted response
 */
interface PromotedResponse {
  movies: TTItem[];
  series: TTItem[];
  music: TTItem[];
}
/**
 * live stream response
 */
interface AllLiveStreamRailResponse {
  rails: LiveStreamRail[];
  took: number;
  total: number;
  type: number;
}

/**
 * live stream rail
 */
interface LiveStreamRail {
  id: number;
  isContinueWatching: boolean;
  name: string;
  list: LiveStreamRailItem[];
  isCarousel: boolean;
  displayOrder: number;
  isMusic: boolean;
  isTentimeOriginal: boolean;
  total: number;
}

/**
 * live stream rail item
 */
interface LiveStreamRailItem {
  id: number;
  thumbnail: string;
  name: string;
  isTentimeOriginal?: boolean;
  isWatched?: boolean;
  description?: string;
  elapsedTime?: number;
  categoryId?: number; // If partner
  categories?: string[];
  trailers?: Trailer[];
  seasonCount?: number;
  serieId?: number; // only in related card
  seasonIndex?: number; // only in related card
  episodeIndex?: number; // only in related card
  defaultThumbnail?: string;
  rating?: string;
  releaseYear?: number;
  duration?: number;
  streamingUrl?: string;
  mp3Path?: string;
  singers?: string;
  canWatch?: boolean;
  video?: VideoDetails;
  metadata?: Metadata[];
  epg: LiveStreamEPG;
  selectSettingMenu: boolean;
  itemType?: number;
}

/**
 * live stream rail item
 */
interface LiveStreamEPG {
  id: number;
  score: number;
  isActive: boolean;
  name: string;
  programs: EpgProgram[];
  beautifulEpg: EpgProgram[];
}

/**
 * live stream program item
 */
interface EpgProgram {
  defaultThumbnail: string;
  description: string;
  endDateUtc: number;
  id: number;
  isActive: true;
  name: string;
  score: number;
  startDateUtc: number;
  thumbnail: string;
  timeZone: string;
  videoPath: string;
}

interface LiveStreamDetailsResponse {
  details: LiveStreamRailItem;
  similar: LiveStreamRailItem[];
}

interface TentimePlayListResponse {
  details: MusicDetailsResponse;
  songs: TTItem[];
}

interface SupportPhoneNumbersResponse {
  globalPhoneNumber: string;
  localPhoneNumbers: string[];
}

interface GetPartnerResponse {
  list: Partner[];
  count: number;
}

interface Partner {
  id: number;
  name: string;
  url: string;
  footerLogo?: string;
  menuLogo: string;
  menuText: string;
}

interface GetScratchCardErrorsResponse {
  failureScratchCardCount: number;
  responseCode: number;
}

interface FeatureGroup {
  id: number;
  groupFeatureName: string;
  displayOrder: number;
  features: Feature[];
}

interface Feature {
  id: number;
  featureName: string;
  displayOrder: number;
  featureDescription: string;
  subscriptionFeatureDetails: SubscriptionFeatureDetails[];
}

interface SubscriptionFeatureDetails {
  id: number;
  subscriptionId: number;
  value: number | string;
}

interface LikeUnlikeResponse {
  msg?: string;
}

interface ICard {
  id: number;
  description?: string;
  details: string; // multiple details separated by /n
  type: string;
  name?: string;
  creditCardNumber?: string;
  priorityOrder?: number;
  bankType: number;
}

interface SessionResponse {
  sid: string;
  profileName: string;
  isMasterProfile: boolean;
  isThisSession: boolean;
  isActive: boolean;
  lastActivity: number;
  deviceDescription: string;
  avatar: string;
}
