/**
 * An Object which contains the input key with it's value.
 */
interface InputStrings {
  [keys: string]: string;
}

/**
 * Pins interface used for 1 character inputs, like "Forgot Password" confirmation inputs
 */
interface Pin {
  id: string;
  type: string;
  name: string;
  value: string;
}

interface SearchPattern {
  pattern: string;
  itemType?: number;
}

/**
 * Data for swiper section
 */
interface SwiperData {
  title: string;
  viewAllLink: string;
  data: any;
  dataType: string;
  isMyList?: boolean;
  isCategories?: boolean;
}

/**
 * Single rail body
 */
interface Rail {
  id: number;
  name: string;
  isCarousel: boolean;
  isTenTimeOriginal: boolean;
  isContinueWatching?: boolean;
  isMusic: boolean;
  list: TTItem[];
  total: number;
  isTVShow?: boolean;
  isCircular?: boolean;
  tracks?: any;
  displayOrder?: number;
  description?: string;
  itemType?: number;
  backgroundThumbnail?: string;
  type?: string;
  link?: string;
}

interface DetailedItem {
  id: number;
  description: string;
  name: string;
  duration: number;
  metadata: Metadata[];
  liked: boolean;
  disliked: boolean;
  addedToList: boolean;
  rating: string;
  thumbnail: string;
  labelIndicatorId?: number;
  releaseYear?: number;
  isComingSoon?: boolean;
}

/**
 * DetailedMovie in MovieDetailsResponse
 */
interface DetailedMovie extends DetailedItem {
  isFree: boolean;
  canPlayHd: boolean;
  canWatch: boolean;
  categories: Category[];
  tags: string[];
  trailers: Trailer[];
  elapsedTime: number;
  video: VideoDetails;
  limitedMinutes: number;
  hasLimitedMinutes: boolean;
}

interface DetailedMusic extends DetailedItem {
  tags: string[];
  canWatch: boolean;
  singer?: string;
  Singers?: Singer[];
  video: VideoDetails;
  mp3Path: string;
  categories: Category[];
  singerName: string;
}

/**
 * DetailedSerie in SerieDetailsResponse
 */
interface DetailedSerie extends DetailedItem {
  isFree: boolean;
  canPlayHd: boolean;
  canWatch: boolean;
  seasonCount: number;
  episodeCount: number;
  categories: Category[];
  tags: string[];
  trailers: Trailer[];
  seasonDetails: SeasonDetailsResponse[];
  video: VideoDetails;
}

/**
 * DetailedArtist in ArtistDetailsResponse
 */
interface DetailedArtist {
  id: number;
  country: string;
  biography: string;
  isPrimary: boolean;
  itemType: number;
  name: string;
  thumbnail: string;
}

/**
 * Single Episode body
 */
interface Episode {
  id: number;
  description: string;
  name: string;
  duration: number;
  thumbnail: string;
  episodeNumber: number;
  canPlayHd: boolean;
  canWatch: boolean;
  liked?: boolean;
  disliked?: boolean;
  isWatched?: boolean;
  elapsedTime: number;
  video: VideoDetails;
  seasonNumber?: number;
  hasLimitedMinutes: boolean;
  limitedMinutes: number;
}

/**
 * Single category body
 */
interface Category {
  id: number;
  name: string;
  url: string;
}

interface SimpleItem {
  id: number;
  itemType?: number;
  liked?: boolean;
  disliked?: boolean;
  addedToList?: boolean;
}

/**
 * Single SVOD or Music item
 */
interface TTItem extends SimpleItem {
  thumbnail?: string;
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
  circularThumbnail?: string;
  rating?: string;
  logoThumbnail?: string;
  releaseYear?: number;
  duration?: number;
  streamingUrl?: string;
  mp3Path?: string;
  singers?: string;
  canWatch?: boolean;
  video?: VideoDetails;
  metadata?: Metadata[];
  episodeNumber?: number;
  releasedDate?: string;
  epg?: EpgProgram[];
  isFree?: boolean;
  hasLimitedEpisodes?: boolean;
  hasLimitedMinutes?: boolean;
  liveStreamingId?: number;
  labelIndicatorId?: number;
  hasVideo?: boolean;
  minAge?: number;
  isComingSoon?: boolean;
  country?: string;
  portraitThumbnail?: string;
  isSelected?: boolean;
  songList?: any[];
}

/**
 * Single metadata body
 */
interface Metadata {
  values: string[];
  type: string;
}

/**
 * Single trailer body
 */
interface Trailer {
  id: number;
  title: string;
  path: string;
  duration: number;
  thumbnail: string;
  defaultThumbnail: string;
  isComingSoon: boolean;
  videoType?: string;
}

/**
 * Single language body
 */
interface Language {
  id: number;
  code: string;
  name?: string;
}

/**
 * Single gender body
 */
interface Gender {
  id: string;
  name: string;
}

interface updatedSortDirectionResponse {
  Msg: string;
  sortDirection: number;
}

/**
 * Single viewAll body
 */
interface ViewAllBody {
  name: string;
  list: TTItem[];
  total: number;
  resumeMusicId?: number;
  thumbnail?: string;
}

interface allArtistsResponse {
  total: number;
  sortDirection: number;
  list: TTItem[];
  followedArtists: TTItem[];
}

/**
 * Single subscription body
 */
interface Subscription {
  id: number;
  containAds: boolean;
  details: string;
  hasDiscount: boolean;
  hasPromocode: boolean;
  isDefault: boolean;
  isHd: boolean;
  name: string;
  numberOfDevices: number;
  period: number;
  periodUnitType: string;
  priorityOrder: number;
  price: number;
  type: string;
  disclaimer?: string;
  subscriptionDetails?: SubscriptionDetails;
  selected?: boolean;
  labelIndicatorId?: number;
  subscriptionEndDate: string;
  isEarthLink?: boolean;
  isScopeSky?: boolean;
  isHalaSat?: boolean;
  endDate?: Date;
}

/**
 * Single payment body
 */
interface Payment {
  id: number;
  name?: string;
  description: string;
  creditCardNumber: string;
  type: string;
  bankType: number;
}
/**
 * Subscription Details payment body
 */
interface SubscriptionDetails {
  details: string[];
  price: string;
}

/**
 * Reset Config body (this is used to check wether the user is allowed to reset the password or not)
 */
interface ResetConfig {
  emailOrPhoneNumber?: string;
  verificationCode?: string;
  verificationToken?: string;
}

/**
 * Single payment body
 */
interface Payment {
  id: number;
  description: string;
  type: string;
}

/**
 * Single Avatar body
 */
interface Avatar {
  id: number;
  name: string;
  thumbnail: string;
}

/**
 * Single Setting Route body
 */
interface SettingRoute {
  url?: string;
  queryParams?: any;
  text?: string;
  action?: (route: SettingRoute) => void;
  condition?: boolean;
  title?: string;
  isHome?: boolean;
  subItems?: any[];
  icon?: string;
}

/**
 * Single Setting body
 */
interface Setting {
  title: string;
  routes: SettingRoute[];
  isProfile?: boolean;
  condition?: boolean;
}

/**
 * Payment Inputs body
 */
interface PaymentModel {
  cardNumber: string;
  exp: string;
  csc: string;
  emailOrPhoneNumber?: string;
}

/**
 * Phone Payment Body
 */
interface PhonePaymentModel {
  phoneNumber: string;
  verificationCode: string;
  paymentType: string;
}

/**
 * Preloaded video to send to Player component
 */
interface PreloadedVideo {
  videoType?: string; // 'movie', 'serie', 'music', 'stream'..
  videoId?: number;
  content?: any; // What will come up next after the current video.
  seasonIndex?: number; // ONLY WHEN VIDEO TYPE IS 'episode'.
  episodeIndex?: number; // ONLY WHEN VIDEO TYPE IS 'episode'.
  videoUrl?: string; // Video url to play
  videoThumbnail?: string;
  videoName?: string;
  videoDescription?: string;
  canWatch?: boolean;
  hideBackBtn?: boolean;
  playlist?: any[];
  resume?: boolean;
  elapsedTime?: number;
  programs?: EpgProgram[];
  ads?: any;
  nativeAudio?: string;
  skipIntro?: boolean;
  channels?: LiveStreamRailItem[];
  isTvGuide?: boolean;
  hasLimitedMinutes?: boolean;
  limitedMinutes?: number;
}

/**
 * Home data body, here we store the api responses and manipulate the data in case of a like or dislike
 */
interface HomeData {
  carouselMusic: CarouselResponse[];
  ttOriginalMusic: any;
  mostViewedMusics: AllMusicResponse;
  newMusic: AllMusicResponse;
}

/**
 * Video details body
 */
interface VideoDetails {
  path: string;
  skipFrom: number;
  skipTo: number;
  subscriptionId: number;
  videoEncryptionId: number;
  videoId: number;
}

/**
 * Single music body
 */
interface MusicItem {
  addedToList: boolean;
  description: string;
  disliked: boolean;
  id: number;
  liked: boolean;
  name: string;
  thumbnail: string;
  duration: number;
  video: VideoDetails;
  canWatch?: boolean;
}

/**
 * Dingle singer body
 */
interface Singer {
  id: number;
  name: string;
  thumbnail: string;
  biography: string;
  country: string;
  isPrimary: boolean;
  itemType: number;
}

/**
 * Custom error body
 */
interface CustomError {
  name: string;
  message: string;
  code: number;
}

/**
 * Playlist body
 */
interface Playlist {
  id: number;
  name: string;
  total: number;
  thumbnails?: string[];
  musicIds?: number[];
}

interface String {
  toArabicDigits: () => string;
  toEnglishDigits: () => string;
}
