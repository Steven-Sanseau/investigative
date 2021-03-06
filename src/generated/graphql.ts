import { GraphQLClient } from 'graphql-request'
import { print } from 'graphql'
import gql from 'graphql-tag'
export type Maybe<T> = T | null
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string
  String: string
  Boolean: boolean
  Int: number
  Float: number
}

/** The root entry point into the Graph */
export type RootQuery = {
  __typename?: 'RootQuery'
  /**
   * Entry point to get all settings for the site
   * @deprecated
   */
  allSettings?: Maybe<Settings>
  /**
   * Connection between the RootQuery type and the category type
   * @deprecated
   */
  categories?: Maybe<RootQueryToCategoryConnection>
  /**
   * A 0bject
   * @deprecated
   */
  category?: Maybe<Category>
  /**
   * Returns a Comment
   * @deprecated
   */
  comment?: Maybe<Comment>
  /**
   * Connection between the RootQuery type and the Comment type
   * @deprecated
   */
  comments?: Maybe<RootQueryToCommentConnection>
  /**
   * A node used to manage content
   * @deprecated
   */
  contentNode?: Maybe<ContentNode>
  /**
   * Connection between the RootQuery type and the ContentNode type
   * @deprecated
   */
  contentNodes?: Maybe<RootQueryToContentNodeConnection>
  /**
   * Fetch a Content Type node by unique Identifier
   * @deprecated
   */
  contentType?: Maybe<ContentType>
  /**
   * Connection between the RootQuery type and the ContentType type
   * @deprecated
   */
  contentTypes?: Maybe<RootQueryToContentTypeConnection>
  /** @deprecated  */
  discussionSettings?: Maybe<DiscussionSettings>
  /** @deprecated  */
  generalSettings?: Maybe<GeneralSettings>
  /**
   * An object of the mediaItem Type.
   * @deprecated
   */
  mediaItem?: Maybe<MediaItem>
  /**
   * A mediaItem object
   * @deprecated Deprecated in favor of using the single entry point for this type with ID and IDType fields. For example, instead of postBy( id: &quot;&quot; ), use post(id: &quot;&quot; idType: &quot;&quot;)
   */
  mediaItemBy?: Maybe<MediaItem>
  /**
   * Connection between the RootQuery type and the mediaItem type
   * @deprecated
   */
  mediaItems?: Maybe<RootQueryToMediaItemConnection>
  /**
   * A WordPress navigation menu
   * @deprecated
   */
  menu?: Maybe<Menu>
  /**
   * A WordPress navigation menu item
   * @deprecated
   */
  menuItem?: Maybe<MenuItem>
  /**
   * Connection between the RootQuery type and the MenuItem type
   * @deprecated
   */
  menuItems?: Maybe<RootQueryToMenuItemConnection>
  /**
   * Connection between the RootQuery type and the Menu type
   * @deprecated
   */
  menus?: Maybe<RootQueryToMenuConnection>
  /**
   * Fetches an object given its ID
   * @deprecated
   */
  node?: Maybe<Node>
  /** @deprecated  */
  nodeByUri?: Maybe<UniformResourceIdentifiable>
  /**
   * An object of the page Type.
   * @deprecated
   */
  page?: Maybe<Page>
  /**
   * A page object
   * @deprecated Deprecated in favor of using the single entry point for this type with ID and IDType fields. For example, instead of postBy( id: &quot;&quot; ), use post(id: &quot;&quot; idType: &quot;&quot;)
   */
  pageBy?: Maybe<Page>
  /**
   * Connection between the RootQuery type and the page type
   * @deprecated
   */
  pages?: Maybe<RootQueryToPageConnection>
  /**
   * A WordPress plugin
   * @deprecated
   */
  plugin?: Maybe<Plugin>
  /**
   * Connection between the RootQuery type and the Plugin type
   * @deprecated
   */
  plugins?: Maybe<RootQueryToPluginConnection>
  /**
   * An object of the post Type.
   * @deprecated
   */
  post?: Maybe<Post>
  /**
   * A post object
   * @deprecated Deprecated in favor of using the single entry point for this type with ID and IDType fields. For example, instead of postBy( id: &quot;&quot; ), use post(id: &quot;&quot; idType: &quot;&quot;)
   */
  postBy?: Maybe<Post>
  /**
   * A 0bject
   * @deprecated
   */
  postFormat?: Maybe<PostFormat>
  /**
   * Connection between the RootQuery type and the postFormat type
   * @deprecated
   */
  postFormats?: Maybe<RootQueryToPostFormatConnection>
  /**
   * Connection between the RootQuery type and the post type
   * @deprecated
   */
  posts?: Maybe<RootQueryToPostConnection>
  /** @deprecated  */
  readingSettings?: Maybe<ReadingSettings>
  /**
   * Connection between the RootQuery type and the ContentRevisionUnion type
   * @deprecated
   */
  revisions?: Maybe<RootQueryToContentRevisionUnionConnection>
  /**
   * A 0bject
   * @deprecated
   */
  tag?: Maybe<Tag>
  /**
   * Connection between the RootQuery type and the tag type
   * @deprecated
   */
  tags?: Maybe<RootQueryToTagConnection>
  /**
   * Connection between the RootQuery type and the Taxonomy type
   * @deprecated
   */
  taxonomies?: Maybe<RootQueryToTaxonomyConnection>
  /**
   * Fetch a Taxonomy node by unique Identifier
   * @deprecated
   */
  taxonomy?: Maybe<Taxonomy>
  /**
   * A node in a taxonomy used to group and relate content nodes
   * @deprecated
   */
  termNode?: Maybe<TermNode>
  /**
   * Connection between the RootQuery type and the TermNode type
   * @deprecated
   */
  terms?: Maybe<RootQueryToTermNodeConnection>
  /**
   * A Theme object
   * @deprecated
   */
  theme?: Maybe<Theme>
  /**
   * Connection between the RootQuery type and the Theme type
   * @deprecated
   */
  themes?: Maybe<RootQueryToThemeConnection>
  /**
   * Returns a user
   * @deprecated
   */
  user?: Maybe<User>
  /**
   * Returns a user role
   * @deprecated
   */
  userRole?: Maybe<UserRole>
  /**
   * Connection between the RootQuery type and the UserRole type
   * @deprecated
   */
  userRoles?: Maybe<RootQueryToUserRoleConnection>
  /**
   * Connection between the RootQuery type and the User type
   * @deprecated
   */
  users?: Maybe<RootQueryToUserConnection>
  /**
   * Returns the current user
   * @deprecated
   */
  viewer?: Maybe<User>
  /** @deprecated  */
  writingSettings?: Maybe<WritingSettings>
}

/** The root entry point into the Graph */
export type RootQueryCategoriesArgs = {
  first?: Maybe<Scalars['Int']>
  last?: Maybe<Scalars['Int']>
  after?: Maybe<Scalars['String']>
  before?: Maybe<Scalars['String']>
  where?: Maybe<RootQueryToCategoryConnectionWhereArgs>
}

/** The root entry point into the Graph */
export type RootQueryCategoryArgs = {
  id: Scalars['ID']
  idType?: Maybe<CategoryIdType>
}

/** The root entry point into the Graph */
export type RootQueryCommentArgs = {
  id: Scalars['ID']
}

/** The root entry point into the Graph */
export type RootQueryCommentsArgs = {
  first?: Maybe<Scalars['Int']>
  last?: Maybe<Scalars['Int']>
  after?: Maybe<Scalars['String']>
  before?: Maybe<Scalars['String']>
  where?: Maybe<RootQueryToCommentConnectionWhereArgs>
}

/** The root entry point into the Graph */
export type RootQueryContentNodeArgs = {
  id: Scalars['ID']
  idType?: Maybe<ContentNodeIdTypeEnum>
  contentType?: Maybe<ContentTypeEnum>
}

/** The root entry point into the Graph */
export type RootQueryContentNodesArgs = {
  first?: Maybe<Scalars['Int']>
  last?: Maybe<Scalars['Int']>
  after?: Maybe<Scalars['String']>
  before?: Maybe<Scalars['String']>
  where?: Maybe<RootQueryToContentNodeConnectionWhereArgs>
}

/** The root entry point into the Graph */
export type RootQueryContentTypeArgs = {
  id: Scalars['ID']
  idType?: Maybe<ContentTypeIdTypeEnum>
}

/** The root entry point into the Graph */
export type RootQueryContentTypesArgs = {
  first?: Maybe<Scalars['Int']>
  last?: Maybe<Scalars['Int']>
  after?: Maybe<Scalars['String']>
  before?: Maybe<Scalars['String']>
}

/** The root entry point into the Graph */
export type RootQueryMediaItemArgs = {
  id: Scalars['ID']
  idType?: Maybe<MediaItemIdType>
}

/** The root entry point into the Graph */
export type RootQueryMediaItemByArgs = {
  id?: Maybe<Scalars['ID']>
  mediaItemId?: Maybe<Scalars['Int']>
  uri?: Maybe<Scalars['String']>
  slug?: Maybe<Scalars['String']>
}

/** The root entry point into the Graph */
export type RootQueryMediaItemsArgs = {
  first?: Maybe<Scalars['Int']>
  last?: Maybe<Scalars['Int']>
  after?: Maybe<Scalars['String']>
  before?: Maybe<Scalars['String']>
  where?: Maybe<RootQueryToMediaItemConnectionWhereArgs>
}

/** The root entry point into the Graph */
export type RootQueryMenuArgs = {
  id: Scalars['ID']
}

/** The root entry point into the Graph */
export type RootQueryMenuItemArgs = {
  id: Scalars['ID']
}

/** The root entry point into the Graph */
export type RootQueryMenuItemsArgs = {
  first?: Maybe<Scalars['Int']>
  last?: Maybe<Scalars['Int']>
  after?: Maybe<Scalars['String']>
  before?: Maybe<Scalars['String']>
  where?: Maybe<RootQueryToMenuItemConnectionWhereArgs>
}

/** The root entry point into the Graph */
export type RootQueryMenusArgs = {
  first?: Maybe<Scalars['Int']>
  last?: Maybe<Scalars['Int']>
  after?: Maybe<Scalars['String']>
  before?: Maybe<Scalars['String']>
  where?: Maybe<RootQueryToMenuConnectionWhereArgs>
}

/** The root entry point into the Graph */
export type RootQueryNodeArgs = {
  id?: Maybe<Scalars['ID']>
}

/** The root entry point into the Graph */
export type RootQueryNodeByUriArgs = {
  uri: Scalars['String']
}

/** The root entry point into the Graph */
export type RootQueryPageArgs = {
  id: Scalars['ID']
  idType?: Maybe<PageIdType>
}

/** The root entry point into the Graph */
export type RootQueryPageByArgs = {
  id?: Maybe<Scalars['ID']>
  pageId?: Maybe<Scalars['Int']>
  uri?: Maybe<Scalars['String']>
}

/** The root entry point into the Graph */
export type RootQueryPagesArgs = {
  first?: Maybe<Scalars['Int']>
  last?: Maybe<Scalars['Int']>
  after?: Maybe<Scalars['String']>
  before?: Maybe<Scalars['String']>
  where?: Maybe<RootQueryToPageConnectionWhereArgs>
}

/** The root entry point into the Graph */
export type RootQueryPluginArgs = {
  id: Scalars['ID']
}

/** The root entry point into the Graph */
export type RootQueryPluginsArgs = {
  first?: Maybe<Scalars['Int']>
  last?: Maybe<Scalars['Int']>
  after?: Maybe<Scalars['String']>
  before?: Maybe<Scalars['String']>
}

/** The root entry point into the Graph */
export type RootQueryPostArgs = {
  id: Scalars['ID']
  idType?: Maybe<PostIdType>
}

/** The root entry point into the Graph */
export type RootQueryPostByArgs = {
  id?: Maybe<Scalars['ID']>
  postId?: Maybe<Scalars['Int']>
  uri?: Maybe<Scalars['String']>
  slug?: Maybe<Scalars['String']>
}

/** The root entry point into the Graph */
export type RootQueryPostFormatArgs = {
  id: Scalars['ID']
  idType?: Maybe<PostFormatIdType>
}

/** The root entry point into the Graph */
export type RootQueryPostFormatsArgs = {
  first?: Maybe<Scalars['Int']>
  last?: Maybe<Scalars['Int']>
  after?: Maybe<Scalars['String']>
  before?: Maybe<Scalars['String']>
  where?: Maybe<RootQueryToPostFormatConnectionWhereArgs>
}

/** The root entry point into the Graph */
export type RootQueryPostsArgs = {
  first?: Maybe<Scalars['Int']>
  last?: Maybe<Scalars['Int']>
  after?: Maybe<Scalars['String']>
  before?: Maybe<Scalars['String']>
  where?: Maybe<RootQueryToPostConnectionWhereArgs>
}

/** The root entry point into the Graph */
export type RootQueryRevisionsArgs = {
  first?: Maybe<Scalars['Int']>
  last?: Maybe<Scalars['Int']>
  after?: Maybe<Scalars['String']>
  before?: Maybe<Scalars['String']>
  where?: Maybe<RootQueryToContentRevisionUnionConnectionWhereArgs>
}

/** The root entry point into the Graph */
export type RootQueryTagArgs = {
  id: Scalars['ID']
  idType?: Maybe<TagIdType>
}

/** The root entry point into the Graph */
export type RootQueryTagsArgs = {
  first?: Maybe<Scalars['Int']>
  last?: Maybe<Scalars['Int']>
  after?: Maybe<Scalars['String']>
  before?: Maybe<Scalars['String']>
  where?: Maybe<RootQueryToTagConnectionWhereArgs>
}

/** The root entry point into the Graph */
export type RootQueryTaxonomiesArgs = {
  first?: Maybe<Scalars['Int']>
  last?: Maybe<Scalars['Int']>
  after?: Maybe<Scalars['String']>
  before?: Maybe<Scalars['String']>
}

/** The root entry point into the Graph */
export type RootQueryTaxonomyArgs = {
  id: Scalars['ID']
  idType?: Maybe<TaxonomyIdTypeEnum>
}

/** The root entry point into the Graph */
export type RootQueryTermNodeArgs = {
  id: Scalars['ID']
  idType?: Maybe<TermNodeIdTypeEnum>
  taxonomy?: Maybe<TaxonomyEnum>
}

/** The root entry point into the Graph */
export type RootQueryTermsArgs = {
  first?: Maybe<Scalars['Int']>
  last?: Maybe<Scalars['Int']>
  after?: Maybe<Scalars['String']>
  before?: Maybe<Scalars['String']>
  where?: Maybe<RootQueryToTermNodeConnectionWhereArgs>
}

/** The root entry point into the Graph */
export type RootQueryThemeArgs = {
  id: Scalars['ID']
}

/** The root entry point into the Graph */
export type RootQueryThemesArgs = {
  first?: Maybe<Scalars['Int']>
  last?: Maybe<Scalars['Int']>
  after?: Maybe<Scalars['String']>
  before?: Maybe<Scalars['String']>
}

/** The root entry point into the Graph */
export type RootQueryUserArgs = {
  id: Scalars['ID']
  idType?: Maybe<UserNodeIdTypeEnum>
}

/** The root entry point into the Graph */
export type RootQueryUserRoleArgs = {
  id: Scalars['ID']
}

/** The root entry point into the Graph */
export type RootQueryUserRolesArgs = {
  first?: Maybe<Scalars['Int']>
  last?: Maybe<Scalars['Int']>
  after?: Maybe<Scalars['String']>
  before?: Maybe<Scalars['String']>
}

/** The root entry point into the Graph */
export type RootQueryUsersArgs = {
  first?: Maybe<Scalars['Int']>
  last?: Maybe<Scalars['Int']>
  after?: Maybe<Scalars['String']>
  before?: Maybe<Scalars['String']>
  where?: Maybe<RootQueryToUserConnectionWhereArgs>
}

/** All of the registered settings */
export type Settings = {
  __typename?: 'Settings'
  /**
   * Allow people to submit comments on new posts.
   * @deprecated
   */
  discussionSettingsDefaultCommentStatus?: Maybe<Scalars['String']>
  /**
   * Allow link notifications from other blogs (pingbacks and trackbacks) on new articles.
   * @deprecated
   */
  discussionSettingsDefaultPingStatus?: Maybe<Scalars['String']>
  /**
   * A date format for all date strings.
   * @deprecated
   */
  generalSettingsDateFormat?: Maybe<Scalars['String']>
  /**
   * Site tagline.
   * @deprecated
   */
  generalSettingsDescription?: Maybe<Scalars['String']>
  /**
   * This address is used for admin purposes, like new user notification.
   * @deprecated
   */
  generalSettingsEmail?: Maybe<Scalars['String']>
  /**
   * WordPress locale code.
   * @deprecated
   */
  generalSettingsLanguage?: Maybe<Scalars['String']>
  /**
   * A day number of the week that the week should start on.
   * @deprecated
   */
  generalSettingsStartOfWeek?: Maybe<Scalars['Int']>
  /**
   * A time format for all time strings.
   * @deprecated
   */
  generalSettingsTimeFormat?: Maybe<Scalars['String']>
  /**
   * A city in the same timezone as you.
   * @deprecated
   */
  generalSettingsTimezone?: Maybe<Scalars['String']>
  /**
   * Site title.
   * @deprecated
   */
  generalSettingsTitle?: Maybe<Scalars['String']>
  /**
   * Site URL.
   * @deprecated
   */
  generalSettingsUrl?: Maybe<Scalars['String']>
  /**
   * Blog pages show at most.
   * @deprecated
   */
  readingSettingsPostsPerPage?: Maybe<Scalars['Int']>
  /**
   * Default post category.
   * @deprecated
   */
  writingSettingsDefaultCategory?: Maybe<Scalars['Int']>
  /**
   * Default post format.
   * @deprecated
   */
  writingSettingsDefaultPostFormat?: Maybe<Scalars['String']>
  /**
   * Convert emoticons like :-) and :-P to graphics on display.
   * @deprecated
   */
  writingSettingsUseSmilies?: Maybe<Scalars['Boolean']>
}

/** Arguments for filtering the RootQueryToCategoryConnection connection */
export type RootQueryToCategoryConnectionWhereArgs = {
  /** Unique cache key to be produced when this query is stored in an object cache. Default is 'core'. */
  cacheDomain?: Maybe<Scalars['String']>
  /** Term ID to retrieve child terms of. If multiple taxonomies are passed, $child_of is ignored. Default 0. */
  childOf?: Maybe<Scalars['Int']>
  /** True to limit results to terms that have no children. This parameter has no effect on non-hierarchical taxonomies. Default false. */
  childless?: Maybe<Scalars['Boolean']>
  /** Retrieve terms where the description is LIKE the input value. Default empty. */
  descriptionLike?: Maybe<Scalars['String']>
  /** Array of term ids to exclude. If $include is non-empty, $exclude is ignored. Default empty array. */
  exclude?: Maybe<Array<Maybe<Scalars['ID']>>>
  /** Array of term ids to exclude along with all of their descendant terms. If $include is non-empty, $exclude_tree is ignored. Default empty array. */
  excludeTree?: Maybe<Array<Maybe<Scalars['ID']>>>
  /** Whether to hide terms not assigned to any posts. Accepts true or false. Default false */
  hideEmpty?: Maybe<Scalars['Boolean']>
  /** Whether to include terms that have non-empty descendants (even if $hide_empty is set to true). Default true. */
  hierarchical?: Maybe<Scalars['Boolean']>
  /** Array of term ids to include. Default empty array. */
  include?: Maybe<Array<Maybe<Scalars['ID']>>>
  /** Array of names to return term(s) for. Default empty. */
  name?: Maybe<Array<Maybe<Scalars['String']>>>
  /** Retrieve terms where the name is LIKE the input value. Default empty. */
  nameLike?: Maybe<Scalars['String']>
  /** Array of object IDs. Results will be limited to terms associated with these objects. */
  objectIds?: Maybe<Array<Maybe<Scalars['ID']>>>
  /** Field(s) to order terms by. Defaults to 'name'. */
  orderby?: Maybe<TermObjectsConnectionOrderbyEnum>
  /** Whether to pad the quantity of a term's children in the quantity of each term's "count" object variable. Default false. */
  padCounts?: Maybe<Scalars['Boolean']>
  /** Parent term ID to retrieve direct-child terms of. Default empty. */
  parent?: Maybe<Scalars['Int']>
  /** Search criteria to match terms. Will be SQL-formatted with wildcards before and after. Default empty. */
  search?: Maybe<Scalars['String']>
  /** Default false. If true, only the items connected to the source item will be returned. If false, all items will be returned regardless of connection to the source */
  shouldOnlyIncludeConnectedItems?: Maybe<Scalars['Boolean']>
  /** Default false. If true, the connection will be output in a flat list instead of the hierarchical list. So child terms will be output in the same level as the parent terms */
  shouldOutputInFlatList?: Maybe<Scalars['Boolean']>
  /** Array of slugs to return term(s) for. Default empty. */
  slug?: Maybe<Array<Maybe<Scalars['String']>>>
  /** Array of term taxonomy IDs, to match when querying terms. */
  termTaxonomId?: Maybe<Array<Maybe<Scalars['ID']>>>
  /** Whether to prime meta caches for matched terms. Default true. */
  updateTermMetaCache?: Maybe<Scalars['Boolean']>
}

/** Options for ordering the connection by */
export enum TermObjectsConnectionOrderbyEnum {
  Count = 'COUNT',
  Description = 'DESCRIPTION',
  Name = 'NAME',
  Slug = 'SLUG',
  TermGroup = 'TERM_GROUP',
  TermId = 'TERM_ID',
  TermOrder = 'TERM_ORDER',
}

/** Connection between the RootQuery type and the category type */
export type RootQueryToCategoryConnection = {
  __typename?: 'RootQueryToCategoryConnection'
  /**
   * Edges for the RootQueryToCategoryConnection connection
   * @deprecated
   */
  edges?: Maybe<Array<Maybe<RootQueryToCategoryConnectionEdge>>>
  /**
   * The nodes of the connection, without the edges
   * @deprecated
   */
  nodes?: Maybe<Array<Maybe<Category>>>
  /**
   * Information about pagination in a connection.
   * @deprecated
   */
  pageInfo?: Maybe<WpPageInfo>
}

/** An edge in a connection */
export type RootQueryToCategoryConnectionEdge = {
  __typename?: 'RootQueryToCategoryConnectionEdge'
  /**
   * A cursor for use in pagination
   * @deprecated
   */
  cursor?: Maybe<Scalars['String']>
  /**
   * The item at the end of the edge
   * @deprecated
   */
  node?: Maybe<Category>
}

/** The category type */
export type Category = Node &
  TermNode &
  UniformResourceIdentifiable & {
    __typename?: 'Category'
    /**
     * The ancestors of the object
     * @deprecated
     */
    ancestors?: Maybe<Array<Maybe<Category>>>
    /**
     * The id field matches the WP_Post-&gt;ID field.
     * @deprecated Deprecated in favor of databaseId
     */
    categoryId?: Maybe<Scalars['Int']>
    /**
     * Connection between the category type and the category type
     * @deprecated
     */
    children?: Maybe<CategoryToCategoryConnection>
    /**
     * Added to the GraphQL Schema because the ACF Field Group &quot;Category color&quot; was assigned to the &quot;category&quot; taxonomy
     * @deprecated
     */
    color?: Maybe<Category_Color>
    /**
     * The number of objects connected to the object
     * @deprecated
     */
    count?: Maybe<Scalars['Int']>
    /**
     * Identifies the primary key from the database.
     * @deprecated
     */
    databaseId: Scalars['Int']
    /**
     * The description of the object
     * @deprecated
     */
    description?: Maybe<Scalars['String']>
    /**
     * The globally unique ID for the object
     * @deprecated
     */
    id: Scalars['ID']
    /**
     * Whether the object is restricted from the current viewer
     * @deprecated
     */
    isRestricted?: Maybe<Scalars['Boolean']>
    /**
     * The link to the term
     * @deprecated
     */
    link?: Maybe<Scalars['String']>
    /**
     * The human friendly name of the object.
     * @deprecated
     */
    name?: Maybe<Scalars['String']>
    /**
     * The parent object
     * @deprecated
     */
    parent?: Maybe<Category>
    /**
     * Connection between the category type and the post type
     * @deprecated
     */
    posts?: Maybe<CategoryToPostConnection>
    /**
     * Added to the GraphQL Schema because the ACF Field Group &quot;Categoy Show Menu&quot; was assigned to the &quot;category&quot; taxonomy
     * @deprecated
     */
    showMenu?: Maybe<Category_Showmenu>
    /**
     * An alphanumeric identifier for the object unique to its type.
     * @deprecated
     */
    slug?: Maybe<Scalars['String']>
    /**
     * Connection between the category type and the Taxonomy type
     * @deprecated
     */
    taxonomy?: Maybe<CategoryToTaxonomyConnection>
    /**
     * The ID of the term group that this term object belongs to
     * @deprecated
     */
    termGroupId?: Maybe<Scalars['Int']>
    /**
     * The taxonomy ID that the object is associated with
     * @deprecated
     */
    termTaxonomyId?: Maybe<Scalars['Int']>
    /**
     * The unique resource identifier path
     * @deprecated
     */
    uri: Scalars['String']
  }

/** The category type */
export type CategoryChildrenArgs = {
  first?: Maybe<Scalars['Int']>
  last?: Maybe<Scalars['Int']>
  after?: Maybe<Scalars['String']>
  before?: Maybe<Scalars['String']>
  where?: Maybe<CategoryToCategoryConnectionWhereArgs>
}

/** The category type */
export type CategoryPostsArgs = {
  first?: Maybe<Scalars['Int']>
  last?: Maybe<Scalars['Int']>
  after?: Maybe<Scalars['String']>
  before?: Maybe<Scalars['String']>
  where?: Maybe<CategoryToPostConnectionWhereArgs>
}

/** An object with an ID */
export type Node = {
  /** The globally unique ID for the object */
  id: Scalars['ID']
}

/** Terms are nodes within a Taxonomy, used to group and relate other nodes. */
export type TermNode = {
  /** The number of objects connected to the object */
  count?: Maybe<Scalars['Int']>
  /** Identifies the primary key from the database. */
  databaseId: Scalars['Int']
  /** The description of the object */
  description?: Maybe<Scalars['String']>
  /** Unique identifier for the term */
  id: Scalars['ID']
  /** Whether the object is restricted from the current viewer */
  isRestricted?: Maybe<Scalars['Boolean']>
  /** The link to the term */
  link?: Maybe<Scalars['String']>
  /** The human friendly name of the object. */
  name?: Maybe<Scalars['String']>
  /** An alphanumeric identifier for the object unique to its type. */
  slug?: Maybe<Scalars['String']>
  /** The ID of the term group that this term object belongs to */
  termGroupId?: Maybe<Scalars['Int']>
  /** The taxonomy ID that the object is associated with */
  termTaxonomyId?: Maybe<Scalars['Int']>
  /** The unique resource identifier path */
  uri: Scalars['String']
}

/** Any node that has a URI */
export type UniformResourceIdentifiable = {
  /** The unique resource identifier path */
  databaseId: Scalars['Int']
  /** The unique resource identifier path */
  id: Scalars['ID']
  /** The unique resource identifier path */
  uri: Scalars['String']
}

/** Arguments for filtering the CategoryToCategoryConnection connection */
export type CategoryToCategoryConnectionWhereArgs = {
  /** Unique cache key to be produced when this query is stored in an object cache. Default is 'core'. */
  cacheDomain?: Maybe<Scalars['String']>
  /** Term ID to retrieve child terms of. If multiple taxonomies are passed, $child_of is ignored. Default 0. */
  childOf?: Maybe<Scalars['Int']>
  /** True to limit results to terms that have no children. This parameter has no effect on non-hierarchical taxonomies. Default false. */
  childless?: Maybe<Scalars['Boolean']>
  /** Retrieve terms where the description is LIKE the input value. Default empty. */
  descriptionLike?: Maybe<Scalars['String']>
  /** Array of term ids to exclude. If $include is non-empty, $exclude is ignored. Default empty array. */
  exclude?: Maybe<Array<Maybe<Scalars['ID']>>>
  /** Array of term ids to exclude along with all of their descendant terms. If $include is non-empty, $exclude_tree is ignored. Default empty array. */
  excludeTree?: Maybe<Array<Maybe<Scalars['ID']>>>
  /** Whether to hide terms not assigned to any posts. Accepts true or false. Default false */
  hideEmpty?: Maybe<Scalars['Boolean']>
  /** Whether to include terms that have non-empty descendants (even if $hide_empty is set to true). Default true. */
  hierarchical?: Maybe<Scalars['Boolean']>
  /** Array of term ids to include. Default empty array. */
  include?: Maybe<Array<Maybe<Scalars['ID']>>>
  /** Array of names to return term(s) for. Default empty. */
  name?: Maybe<Array<Maybe<Scalars['String']>>>
  /** Retrieve terms where the name is LIKE the input value. Default empty. */
  nameLike?: Maybe<Scalars['String']>
  /** Array of object IDs. Results will be limited to terms associated with these objects. */
  objectIds?: Maybe<Array<Maybe<Scalars['ID']>>>
  /** Field(s) to order terms by. Defaults to 'name'. */
  orderby?: Maybe<TermObjectsConnectionOrderbyEnum>
  /** Whether to pad the quantity of a term's children in the quantity of each term's "count" object variable. Default false. */
  padCounts?: Maybe<Scalars['Boolean']>
  /** Parent term ID to retrieve direct-child terms of. Default empty. */
  parent?: Maybe<Scalars['Int']>
  /** Search criteria to match terms. Will be SQL-formatted with wildcards before and after. Default empty. */
  search?: Maybe<Scalars['String']>
  /** Default false. If true, only the items connected to the source item will be returned. If false, all items will be returned regardless of connection to the source */
  shouldOnlyIncludeConnectedItems?: Maybe<Scalars['Boolean']>
  /** Default false. If true, the connection will be output in a flat list instead of the hierarchical list. So child terms will be output in the same level as the parent terms */
  shouldOutputInFlatList?: Maybe<Scalars['Boolean']>
  /** Array of slugs to return term(s) for. Default empty. */
  slug?: Maybe<Array<Maybe<Scalars['String']>>>
  /** Array of term taxonomy IDs, to match when querying terms. */
  termTaxonomId?: Maybe<Array<Maybe<Scalars['ID']>>>
  /** Whether to prime meta caches for matched terms. Default true. */
  updateTermMetaCache?: Maybe<Scalars['Boolean']>
}

/** Connection between the category type and the category type */
export type CategoryToCategoryConnection = {
  __typename?: 'CategoryToCategoryConnection'
  /**
   * Edges for the CategoryToCategoryConnection connection
   * @deprecated
   */
  edges?: Maybe<Array<Maybe<CategoryToCategoryConnectionEdge>>>
  /**
   * The nodes of the connection, without the edges
   * @deprecated
   */
  nodes?: Maybe<Array<Maybe<Category>>>
  /**
   * Information about pagination in a connection.
   * @deprecated
   */
  pageInfo?: Maybe<WpPageInfo>
}

/** An edge in a connection */
export type CategoryToCategoryConnectionEdge = {
  __typename?: 'CategoryToCategoryConnectionEdge'
  /**
   * A cursor for use in pagination
   * @deprecated
   */
  cursor?: Maybe<Scalars['String']>
  /**
   * The item at the end of the edge
   * @deprecated
   */
  node?: Maybe<Category>
}

/** Information about pagination in a connection. */
export type WpPageInfo = {
  __typename?: 'WPPageInfo'
  /**
   * When paginating forwards, the cursor to continue.
   * @deprecated
   */
  endCursor?: Maybe<Scalars['String']>
  /**
   * When paginating forwards, are there more items?
   * @deprecated
   */
  hasNextPage: Scalars['Boolean']
  /**
   * When paginating backwards, are there more items?
   * @deprecated
   */
  hasPreviousPage: Scalars['Boolean']
  /**
   * When paginating backwards, the cursor to continue.
   * @deprecated
   */
  startCursor?: Maybe<Scalars['String']>
}

/** Field Group */
export type Category_Color = {
  __typename?: 'Category_Color'
  /** @deprecated  */
  color?: Maybe<Scalars['String']>
  /** @deprecated  */
  fieldGroupName?: Maybe<Scalars['String']>
}

/** Arguments for filtering the CategoryToPostConnection connection */
export type CategoryToPostConnectionWhereArgs = {
  /** The user that's connected as the author of the object. Use the userId for the author object. */
  author?: Maybe<Scalars['Int']>
  /** Find objects connected to author(s) in the array of author's userIds */
  authorIn?: Maybe<Array<Maybe<Scalars['ID']>>>
  /** Find objects connected to the author by the author's nicename */
  authorName?: Maybe<Scalars['String']>
  /** Find objects NOT connected to author(s) in the array of author's userIds */
  authorNotIn?: Maybe<Array<Maybe<Scalars['ID']>>>
  /** Category ID */
  categoryId?: Maybe<Scalars['Int']>
  /** Array of category IDs, used to display objects from one category OR another */
  categoryIn?: Maybe<Array<Maybe<Scalars['ID']>>>
  /** Use Category Slug */
  categoryName?: Maybe<Scalars['String']>
  /** Array of category IDs, used to display objects from one category OR another */
  categoryNotIn?: Maybe<Array<Maybe<Scalars['ID']>>>
  /** Filter the connection based on dates */
  dateQuery?: Maybe<DateQueryInput>
  /** True for objects with passwords; False for objects without passwords; null for all objects with or without passwords */
  hasPassword?: Maybe<Scalars['Boolean']>
  /** Specific ID of the object */
  id?: Maybe<Scalars['Int']>
  /** Array of IDs for the objects to retrieve */
  in?: Maybe<Array<Maybe<Scalars['ID']>>>
  /** Get objects with a specific mimeType property */
  mimeType?: Maybe<MimeTypeEnum>
  /** Slug / post_name of the object */
  name?: Maybe<Scalars['String']>
  /** Specify objects to retrieve. Use slugs */
  nameIn?: Maybe<Array<Maybe<Scalars['String']>>>
  /** Specify IDs NOT to retrieve. If this is used in the same query as "in", it will be ignored */
  notIn?: Maybe<Array<Maybe<Scalars['ID']>>>
  /** What paramater to use to order the objects by. */
  orderby?: Maybe<Array<Maybe<PostObjectsConnectionOrderbyInput>>>
  /** Use ID to return only children. Use 0 to return only top-level items */
  parent?: Maybe<Scalars['String']>
  /** Specify objects whose parent is in an array */
  parentIn?: Maybe<Array<Maybe<Scalars['ID']>>>
  /** Specify posts whose parent is not in an array */
  parentNotIn?: Maybe<Array<Maybe<Scalars['ID']>>>
  /** Show posts with a specific password. */
  password?: Maybe<Scalars['String']>
  /** Show Posts based on a keyword search */
  search?: Maybe<Scalars['String']>
  stati?: Maybe<Array<Maybe<PostStatusEnum>>>
  status?: Maybe<PostStatusEnum>
  /** Tag Slug */
  tag?: Maybe<Scalars['String']>
  /** Use Tag ID */
  tagId?: Maybe<Scalars['String']>
  /** Array of tag IDs, used to display objects from one tag OR another */
  tagIn?: Maybe<Array<Maybe<Scalars['ID']>>>
  /** Array of tag IDs, used to display objects from one tag OR another */
  tagNotIn?: Maybe<Array<Maybe<Scalars['ID']>>>
  /** Array of tag slugs, used to display objects from one tag OR another */
  tagSlugAnd?: Maybe<Array<Maybe<Scalars['String']>>>
  /** Array of tag slugs, used to exclude objects in specified tags */
  tagSlugIn?: Maybe<Array<Maybe<Scalars['String']>>>
  /** Title of the object */
  title?: Maybe<Scalars['String']>
}

/** Filter the connection based on input */
export type DateQueryInput = {
  /** Nodes should be returned after this date */
  after?: Maybe<DateInput>
  /** Nodes should be returned before this date */
  before?: Maybe<DateInput>
  /** Column to query against */
  column?: Maybe<PostObjectsConnectionDateColumnEnum>
  /** For after/before, whether exact value should be matched or not */
  compare?: Maybe<Scalars['String']>
  /** Day of the month (from 1 to 31) */
  day?: Maybe<Scalars['Int']>
  /** Hour (from 0 to 23) */
  hour?: Maybe<Scalars['Int']>
  /** For after/before, whether exact value should be matched or not */
  inclusive?: Maybe<Scalars['Boolean']>
  /** Minute (from 0 to 59) */
  minute?: Maybe<Scalars['Int']>
  /** Month number (from 1 to 12) */
  month?: Maybe<Scalars['Int']>
  /** OR or AND, how the sub-arrays should be compared */
  relation?: Maybe<RelationEnum>
  /** Second (0 to 59) */
  second?: Maybe<Scalars['Int']>
  /** Week of the year (from 0 to 53) */
  week?: Maybe<Scalars['Int']>
  /** 4 digit year (e.g. 2017) */
  year?: Maybe<Scalars['Int']>
}

/** Date values */
export type DateInput = {
  /** Day of the month (from 1 to 31) */
  day?: Maybe<Scalars['Int']>
  /** Month number (from 1 to 12) */
  month?: Maybe<Scalars['Int']>
  /** 4 digit year (e.g. 2017) */
  year?: Maybe<Scalars['Int']>
}

/** The column to use when filtering by date */
export enum PostObjectsConnectionDateColumnEnum {
  Date = 'DATE',
  Modified = 'MODIFIED',
}

/** The logical relation between each item in the array when there are more than one. */
export enum RelationEnum {
  And = 'AND',
  Or = 'OR',
}

/** The MimeType of the object */
export enum MimeTypeEnum {
  ApplicationJava = 'APPLICATION_JAVA',
  ApplicationMsword = 'APPLICATION_MSWORD',
  ApplicationOctetStream = 'APPLICATION_OCTET_STREAM',
  ApplicationOnenote = 'APPLICATION_ONENOTE',
  ApplicationOxps = 'APPLICATION_OXPS',
  ApplicationPdf = 'APPLICATION_PDF',
  ApplicationRar = 'APPLICATION_RAR',
  ApplicationRtf = 'APPLICATION_RTF',
  ApplicationTtafXml = 'APPLICATION_TTAF_XML',
  ApplicationVndAppleKeynote = 'APPLICATION_VND_APPLE_KEYNOTE',
  ApplicationVndAppleNumbers = 'APPLICATION_VND_APPLE_NUMBERS',
  ApplicationVndApplePages = 'APPLICATION_VND_APPLE_PAGES',
  ApplicationVndMsAccess = 'APPLICATION_VND_MS_ACCESS',
  ApplicationVndMsExcel = 'APPLICATION_VND_MS_EXCEL',
  ApplicationVndMsExcelAddinMacroenabled_12 = 'APPLICATION_VND_MS_EXCEL_ADDIN_MACROENABLED_12',
  ApplicationVndMsExcelSheetBinaryMacroenabled_12 = 'APPLICATION_VND_MS_EXCEL_SHEET_BINARY_MACROENABLED_12',
  ApplicationVndMsExcelSheetMacroenabled_12 = 'APPLICATION_VND_MS_EXCEL_SHEET_MACROENABLED_12',
  ApplicationVndMsExcelTemplateMacroenabled_12 = 'APPLICATION_VND_MS_EXCEL_TEMPLATE_MACROENABLED_12',
  ApplicationVndMsPowerpoint = 'APPLICATION_VND_MS_POWERPOINT',
  ApplicationVndMsPowerpointAddinMacroenabled_12 = 'APPLICATION_VND_MS_POWERPOINT_ADDIN_MACROENABLED_12',
  ApplicationVndMsPowerpointPresentationMacroenabled_12 = 'APPLICATION_VND_MS_POWERPOINT_PRESENTATION_MACROENABLED_12',
  ApplicationVndMsPowerpointSlideshowMacroenabled_12 = 'APPLICATION_VND_MS_POWERPOINT_SLIDESHOW_MACROENABLED_12',
  ApplicationVndMsPowerpointSlideMacroenabled_12 = 'APPLICATION_VND_MS_POWERPOINT_SLIDE_MACROENABLED_12',
  ApplicationVndMsPowerpointTemplateMacroenabled_12 = 'APPLICATION_VND_MS_POWERPOINT_TEMPLATE_MACROENABLED_12',
  ApplicationVndMsProject = 'APPLICATION_VND_MS_PROJECT',
  ApplicationVndMsWordDocumentMacroenabled_12 = 'APPLICATION_VND_MS_WORD_DOCUMENT_MACROENABLED_12',
  ApplicationVndMsWordTemplateMacroenabled_12 = 'APPLICATION_VND_MS_WORD_TEMPLATE_MACROENABLED_12',
  ApplicationVndMsWrite = 'APPLICATION_VND_MS_WRITE',
  ApplicationVndMsXpsdocument = 'APPLICATION_VND_MS_XPSDOCUMENT',
  ApplicationVndOasisOpendocumentChart = 'APPLICATION_VND_OASIS_OPENDOCUMENT_CHART',
  ApplicationVndOasisOpendocumentDatabase = 'APPLICATION_VND_OASIS_OPENDOCUMENT_DATABASE',
  ApplicationVndOasisOpendocumentFormula = 'APPLICATION_VND_OASIS_OPENDOCUMENT_FORMULA',
  ApplicationVndOasisOpendocumentGraphics = 'APPLICATION_VND_OASIS_OPENDOCUMENT_GRAPHICS',
  ApplicationVndOasisOpendocumentPresentation = 'APPLICATION_VND_OASIS_OPENDOCUMENT_PRESENTATION',
  ApplicationVndOasisOpendocumentSpreadsheet = 'APPLICATION_VND_OASIS_OPENDOCUMENT_SPREADSHEET',
  ApplicationVndOasisOpendocumentText = 'APPLICATION_VND_OASIS_OPENDOCUMENT_TEXT',
  ApplicationVndOpenxmlformatsOfficedocumentPresentationmlPresentation = 'APPLICATION_VND_OPENXMLFORMATS_OFFICEDOCUMENT_PRESENTATIONML_PRESENTATION',
  ApplicationVndOpenxmlformatsOfficedocumentPresentationmlSlide = 'APPLICATION_VND_OPENXMLFORMATS_OFFICEDOCUMENT_PRESENTATIONML_SLIDE',
  ApplicationVndOpenxmlformatsOfficedocumentPresentationmlSlideshow = 'APPLICATION_VND_OPENXMLFORMATS_OFFICEDOCUMENT_PRESENTATIONML_SLIDESHOW',
  ApplicationVndOpenxmlformatsOfficedocumentPresentationmlTemplate = 'APPLICATION_VND_OPENXMLFORMATS_OFFICEDOCUMENT_PRESENTATIONML_TEMPLATE',
  ApplicationVndOpenxmlformatsOfficedocumentSpreadsheetmlSheet = 'APPLICATION_VND_OPENXMLFORMATS_OFFICEDOCUMENT_SPREADSHEETML_SHEET',
  ApplicationVndOpenxmlformatsOfficedocumentSpreadsheetmlTemplate = 'APPLICATION_VND_OPENXMLFORMATS_OFFICEDOCUMENT_SPREADSHEETML_TEMPLATE',
  ApplicationVndOpenxmlformatsOfficedocumentWordprocessingmlDocument = 'APPLICATION_VND_OPENXMLFORMATS_OFFICEDOCUMENT_WORDPROCESSINGML_DOCUMENT',
  ApplicationVndOpenxmlformatsOfficedocumentWordprocessingmlTemplate = 'APPLICATION_VND_OPENXMLFORMATS_OFFICEDOCUMENT_WORDPROCESSINGML_TEMPLATE',
  ApplicationWordperfect = 'APPLICATION_WORDPERFECT',
  ApplicationX_7ZCompressed = 'APPLICATION_X_7Z_COMPRESSED',
  ApplicationXGzip = 'APPLICATION_X_GZIP',
  ApplicationXTar = 'APPLICATION_X_TAR',
  ApplicationZip = 'APPLICATION_ZIP',
  AudioAac = 'AUDIO_AAC',
  AudioFlac = 'AUDIO_FLAC',
  AudioMidi = 'AUDIO_MIDI',
  AudioMpeg = 'AUDIO_MPEG',
  AudioOgg = 'AUDIO_OGG',
  AudioWav = 'AUDIO_WAV',
  AudioXMatroska = 'AUDIO_X_MATROSKA',
  AudioXMsWax = 'AUDIO_X_MS_WAX',
  AudioXMsWma = 'AUDIO_X_MS_WMA',
  AudioXRealaudio = 'AUDIO_X_REALAUDIO',
  ImageBmp = 'IMAGE_BMP',
  ImageGif = 'IMAGE_GIF',
  ImageJpeg = 'IMAGE_JPEG',
  ImagePng = 'IMAGE_PNG',
  ImageTiff = 'IMAGE_TIFF',
  ImageXIcon = 'IMAGE_X_ICON',
  TextCalendar = 'TEXT_CALENDAR',
  TextCss = 'TEXT_CSS',
  TextCsv = 'TEXT_CSV',
  TextPlain = 'TEXT_PLAIN',
  TextRichtext = 'TEXT_RICHTEXT',
  TextTabSeparatedValues = 'TEXT_TAB_SEPARATED_VALUES',
  TextVtt = 'TEXT_VTT',
  Video_3Gpp = 'VIDEO_3GPP',
  Video_3Gpp2 = 'VIDEO_3GPP2',
  VideoAvi = 'VIDEO_AVI',
  VideoDivx = 'VIDEO_DIVX',
  VideoMp4 = 'VIDEO_MP4',
  VideoMpeg = 'VIDEO_MPEG',
  VideoOgg = 'VIDEO_OGG',
  VideoQuicktime = 'VIDEO_QUICKTIME',
  VideoWebm = 'VIDEO_WEBM',
  VideoXFlv = 'VIDEO_X_FLV',
  VideoXMatroska = 'VIDEO_X_MATROSKA',
  VideoXMsAsf = 'VIDEO_X_MS_ASF',
  VideoXMsWm = 'VIDEO_X_MS_WM',
  VideoXMsWmv = 'VIDEO_X_MS_WMV',
  VideoXMsWmx = 'VIDEO_X_MS_WMX',
}

/** Options for ordering the connection */
export type PostObjectsConnectionOrderbyInput = {
  /** The field to order the connection by */
  field: PostObjectsConnectionOrderbyEnum
  /** Possible directions in which to order a list of items */
  order: OrderEnum
}

/** Field to order the connection by */
export enum PostObjectsConnectionOrderbyEnum {
  /** Order by author */
  Author = 'AUTHOR',
  /** Order by publish date */
  Date = 'DATE',
  /** Preserve the ID order given in the IN array */
  In = 'IN',
  /** Order by the menu order value */
  MenuOrder = 'MENU_ORDER',
  /** Order by last modified date */
  Modified = 'MODIFIED',
  /** Preserve slug order given in the NAME_IN array */
  NameIn = 'NAME_IN',
  /** Order by parent ID */
  Parent = 'PARENT',
  /** Order by slug */
  Slug = 'SLUG',
  /** Order by title */
  Title = 'TITLE',
}

/** The cardinality of the connection order */
export enum OrderEnum {
  Asc = 'ASC',
  Desc = 'DESC',
}

/** The status of the object. */
export enum PostStatusEnum {
  /** Objects with the acf-disabled status */
  AcfDisabled = 'ACF_DISABLED',
  /** Objects with the auto-draft status */
  AutoDraft = 'AUTO_DRAFT',
  /** Objects with the draft status */
  Draft = 'DRAFT',
  /** Objects with the future status */
  Future = 'FUTURE',
  /** Objects with the inherit status */
  Inherit = 'INHERIT',
  /** Objects with the pending status */
  Pending = 'PENDING',
  /** Objects with the private status */
  Private = 'PRIVATE',
  /** Objects with the publish status */
  Publish = 'PUBLISH',
  /** Objects with the request-completed status */
  RequestCompleted = 'REQUEST_COMPLETED',
  /** Objects with the request-confirmed status */
  RequestConfirmed = 'REQUEST_CONFIRMED',
  /** Objects with the request-failed status */
  RequestFailed = 'REQUEST_FAILED',
  /** Objects with the request-pending status */
  RequestPending = 'REQUEST_PENDING',
  /** Objects with the trash status */
  Trash = 'TRASH',
}

/** Connection between the category type and the post type */
export type CategoryToPostConnection = {
  __typename?: 'CategoryToPostConnection'
  /**
   * Edges for the CategoryToPostConnection connection
   * @deprecated
   */
  edges?: Maybe<Array<Maybe<CategoryToPostConnectionEdge>>>
  /**
   * The nodes of the connection, without the edges
   * @deprecated
   */
  nodes?: Maybe<Array<Maybe<Post>>>
  /**
   * Information about pagination in a connection.
   * @deprecated
   */
  pageInfo?: Maybe<WpPageInfo>
}

/** An edge in a connection */
export type CategoryToPostConnectionEdge = {
  __typename?: 'CategoryToPostConnectionEdge'
  /**
   * A cursor for use in pagination
   * @deprecated
   */
  cursor?: Maybe<Scalars['String']>
  /**
   * The item at the end of the edge
   * @deprecated
   */
  node?: Maybe<Post>
}

/** The post type */
export type Post = Node &
  ContentNode &
  UniformResourceIdentifiable &
  NodeWithTitle &
  NodeWithContentEditor &
  NodeWithAuthor &
  NodeWithFeaturedImage &
  NodeWithExcerpt &
  NodeWithComments &
  NodeWithTrackbacks &
  NodeWithRevisions & {
    __typename?: 'Post'
    /**
     * The author field will return a queryable User type matching the post&#039;s author.
     * @deprecated
     */
    author?: Maybe<User>
    /**
     * Connection between the post type and the category type
     * @deprecated
     */
    categories?: Maybe<PostToCategoryConnection>
    /**
     * The number of comments. Even though WPGraphQL denotes this field as an integer, in WordPress this field should be saved as a numeric string for compatibility.
     * @deprecated
     */
    commentCount?: Maybe<Scalars['Int']>
    /**
     * Whether the comments are open or closed for this particular post.
     * @deprecated
     */
    commentStatus?: Maybe<Scalars['String']>
    /**
     * Connection between the post type and the Comment type
     * @deprecated
     */
    comments?: Maybe<PostToCommentConnection>
    /**
     * The content of the post.
     * @deprecated
     */
    content?: Maybe<Scalars['String']>
    /**
     * Connection between the post type and the ContentType type
     * @deprecated
     */
    contentType?: Maybe<PostToContentTypeConnection>
    /**
     * The ID of the object in the database.
     * @deprecated
     */
    databaseId: Scalars['Int']
    /**
     * Post publishing date.
     * @deprecated
     */
    date?: Maybe<Scalars['String']>
    /**
     * The publishing date set in GMT.
     * @deprecated
     */
    dateGmt?: Maybe<Scalars['String']>
    /**
     * The desired slug of the post
     * @deprecated
     */
    desiredSlug?: Maybe<Scalars['String']>
    /**
     * The user that most recently edited the object
     * @deprecated
     */
    editLast?: Maybe<User>
    /**
     * If a user has edited the object within the past 15 seconds, this will return the user and the time they last edited. Null if the edit lock doesn&#039;t exist or is greater than 15 seconds
     * @deprecated
     */
    editLock?: Maybe<EditLock>
    /**
     * The RSS enclosure for the object
     * @deprecated
     */
    enclosure?: Maybe<Scalars['String']>
    /**
     * The excerpt of the post.
     * @deprecated
     */
    excerpt?: Maybe<Scalars['String']>
    /**
     * The featured image for the object
     * @deprecated
     */
    featuredImage?: Maybe<MediaItem>
    /**
     * The global unique identifier for this post. This currently matches the value stored in WP_Post-&gt;guid and the guid column in the &quot;post_objects&quot; database table.
     * @deprecated
     */
    guid?: Maybe<Scalars['String']>
    /**
     * The globally unique identifier of the post object.
     * @deprecated
     */
    id: Scalars['ID']
    /**
     * Whether the object is restricted from the current viewer
     * @deprecated
     */
    isRestricted?: Maybe<Scalars['Boolean']>
    /**
     * True if the node is a revision of another node
     * @deprecated
     */
    isRevision?: Maybe<Scalars['Boolean']>
    /**
     * The permalink of the post
     * @deprecated
     */
    link?: Maybe<Scalars['String']>
    /**
     * The local modified time for a post. If a post was recently updated the modified field will change to match the corresponding time.
     * @deprecated
     */
    modified?: Maybe<Scalars['String']>
    /**
     * The GMT modified time for a post. If a post was recently updated the modified field will change to match the corresponding time in GMT.
     * @deprecated
     */
    modifiedGmt?: Maybe<Scalars['String']>
    /**
     * Whether the pings are open or closed for this particular post.
     * @deprecated
     */
    pingStatus?: Maybe<Scalars['String']>
    /**
     * URLs that have been pinged.
     * @deprecated
     */
    pinged?: Maybe<Array<Maybe<Scalars['String']>>>
    /**
     * Connection between the post type and the postFormat type
     * @deprecated
     */
    postFormats?: Maybe<PostToPostFormatConnection>
    /**
     * The id field matches the WP_Post-&gt;ID field.
     * @deprecated Deprecated in favor of the databaseId field
     */
    postId: Scalars['Int']
    /**
     * If the current node is a revision, this field exposes the node this is a revision of. Returns null if the node is not a revision of another node.
     * @deprecated
     */
    revisionOf?: Maybe<PostObjectUnion>
    /**
     * Connection between the post type and the post type
     * @deprecated
     */
    revisions?: Maybe<PostToRevisionConnection>
    /**
     * The uri slug for the post. This is equivalent to the WP_Post-&gt;post_name field and the post_name column in the database for the &quot;post_objects&quot; table.
     * @deprecated
     */
    slug?: Maybe<Scalars['String']>
    /**
     * The current status of the object
     * @deprecated
     */
    status?: Maybe<Scalars['String']>
    /**
     * Connection between the post type and the tag type
     * @deprecated
     */
    tags?: Maybe<PostToTagConnection>
    /**
     * The template assigned to the node
     * @deprecated
     */
    template?: Maybe<ContentTemplateUnion>
    /**
     * Terms connected to the object
     * @deprecated
     */
    termNames?: Maybe<Array<Maybe<Scalars['String']>>>
    /**
     * Terms connected to the object
     * @deprecated
     */
    termSlugs?: Maybe<Array<Maybe<Scalars['String']>>>
    /**
     * Terms connected to the object
     * @deprecated
     */
    terms?: Maybe<Array<Maybe<TermObjectUnion>>>
    /**
     * The title of the post. This is currently just the raw title. An amendment to support rendered title needs to be made.
     * @deprecated
     */
    title?: Maybe<Scalars['String']>
    /**
     * URLs queued to be pinged.
     * @deprecated
     */
    toPing?: Maybe<Array<Maybe<Scalars['String']>>>
    /**
     * URI path for the resource
     * @deprecated
     */
    uri: Scalars['String']
  }

/** The post type */
export type PostCategoriesArgs = {
  first?: Maybe<Scalars['Int']>
  last?: Maybe<Scalars['Int']>
  after?: Maybe<Scalars['String']>
  before?: Maybe<Scalars['String']>
  where?: Maybe<PostToCategoryConnectionWhereArgs>
}

/** The post type */
export type PostCommentsArgs = {
  first?: Maybe<Scalars['Int']>
  last?: Maybe<Scalars['Int']>
  after?: Maybe<Scalars['String']>
  before?: Maybe<Scalars['String']>
  where?: Maybe<PostToCommentConnectionWhereArgs>
}

/** The post type */
export type PostContentArgs = {
  format?: Maybe<PostObjectFieldFormatEnum>
}

/** The post type */
export type PostExcerptArgs = {
  format?: Maybe<PostObjectFieldFormatEnum>
}

/** The post type */
export type PostPostFormatsArgs = {
  first?: Maybe<Scalars['Int']>
  last?: Maybe<Scalars['Int']>
  after?: Maybe<Scalars['String']>
  before?: Maybe<Scalars['String']>
  where?: Maybe<PostToPostFormatConnectionWhereArgs>
}

/** The post type */
export type PostRevisionsArgs = {
  first?: Maybe<Scalars['Int']>
  last?: Maybe<Scalars['Int']>
  after?: Maybe<Scalars['String']>
  before?: Maybe<Scalars['String']>
  where?: Maybe<PostToRevisionConnectionWhereArgs>
}

/** The post type */
export type PostTagsArgs = {
  first?: Maybe<Scalars['Int']>
  last?: Maybe<Scalars['Int']>
  after?: Maybe<Scalars['String']>
  before?: Maybe<Scalars['String']>
  where?: Maybe<PostToTagConnectionWhereArgs>
}

/** The post type */
export type PostTermNamesArgs = {
  taxonomies?: Maybe<Array<Maybe<TaxonomyEnum>>>
}

/** The post type */
export type PostTermSlugsArgs = {
  taxonomies?: Maybe<Array<Maybe<TaxonomyEnum>>>
}

/** The post type */
export type PostTermsArgs = {
  taxonomies?: Maybe<Array<Maybe<TaxonomyEnum>>>
}

/** The post type */
export type PostTitleArgs = {
  format?: Maybe<PostObjectFieldFormatEnum>
}

/** Nodes used to manage content */
export type ContentNode = {
  /** The ID of the object in the database. */
  databaseId: Scalars['Int']
  /** Post publishing date. */
  date?: Maybe<Scalars['String']>
  /** The publishing date set in GMT. */
  dateGmt?: Maybe<Scalars['String']>
  /** The desired slug of the post */
  desiredSlug?: Maybe<Scalars['String']>
  /** The user that most recently edited the object */
  editLast?: Maybe<User>
  /** If a user has edited the object within the past 15 seconds, this will return the user and the time they last edited. Null if the edit lock doesn't exist or is greater than 15 seconds */
  editLock?: Maybe<EditLock>
  /** The RSS enclosure for the object */
  enclosure?: Maybe<Scalars['String']>
  /** The global unique identifier for this post. This currently matches the value stored in WP_Post->guid and the guid column in the "post_objects" database table. */
  guid?: Maybe<Scalars['String']>
  /** The globally unique identifier of the node. */
  id: Scalars['ID']
  /** Whether the object is restricted from the current viewer */
  isRestricted?: Maybe<Scalars['Boolean']>
  /** The permalink of the post */
  link?: Maybe<Scalars['String']>
  /** The local modified time for a post. If a post was recently updated the modified field will change to match the corresponding time. */
  modified?: Maybe<Scalars['String']>
  /** The GMT modified time for a post. If a post was recently updated the modified field will change to match the corresponding time in GMT. */
  modifiedGmt?: Maybe<Scalars['String']>
  /** The uri slug for the post. This is equivalent to the WP_Post->post_name field and the post_name column in the database for the "post_objects" table. */
  slug?: Maybe<Scalars['String']>
  /** The current status of the object */
  status?: Maybe<Scalars['String']>
  /** URI path for the resource */
  uri: Scalars['String']
}

/** A User object */
export type User = Node &
  UniformResourceIdentifiable & {
    __typename?: 'User'
    /**
     * Avatar object for user. The avatar object can be retrieved in different sizes by specifying the size argument.
     * @deprecated
     */
    avatar?: Maybe<Avatar>
    /**
     * User metadata option name. Usually it will be &quot;wp_capabilities&quot;.
     * @deprecated
     */
    capKey?: Maybe<Scalars['String']>
    /**
     * A list of capabilities (permissions) granted to the user
     * @deprecated
     */
    capabilities?: Maybe<Array<Maybe<Scalars['String']>>>
    /**
     * Connection between the User type and the Comment type
     * @deprecated
     */
    comments?: Maybe<UserToCommentConnection>
    /**
     * Identifies the primary key from the database.
     * @deprecated
     */
    databaseId: Scalars['Int']
    /**
     * Description of the user.
     * @deprecated
     */
    description?: Maybe<Scalars['String']>
    /**
     * Email address of the user. This is equivalent to the WP_User-&gt;user_email property.
     * @deprecated
     */
    email?: Maybe<Scalars['String']>
    /**
     * A complete list of capabilities including capabilities inherited from a role. This is equivalent to the array keys of WP_User-&gt;allcaps.
     * @deprecated
     */
    extraCapabilities?: Maybe<Array<Maybe<Scalars['String']>>>
    /**
     * First name of the user. This is equivalent to the WP_User-&gt;user_first_name property.
     * @deprecated
     */
    firstName?: Maybe<Scalars['String']>
    /**
     * The globally unique identifier for the user object.
     * @deprecated
     */
    id: Scalars['ID']
    /**
     * Whether the JWT User secret has been revoked. If the secret has been revoked, auth tokens will not be issued until an admin, or user with proper capabilities re-issues a secret for the user.
     * @deprecated
     */
    isJwtAuthSecretRevoked: Scalars['Boolean']
    /**
     * Whether the object is restricted from the current viewer
     * @deprecated
     */
    isRestricted?: Maybe<Scalars['Boolean']>
    /**
     * The expiration for the JWT Token for the user. If not set custom for the user, it will use the default sitewide expiration setting
     * @deprecated
     */
    jwtAuthExpiration?: Maybe<Scalars['String']>
    /**
     * A JWT token that can be used in future requests for authentication/authorization
     * @deprecated
     */
    jwtAuthToken?: Maybe<Scalars['String']>
    /**
     * A JWT token that can be used in future requests to get a refreshed jwtAuthToken. If the refresh token used in a request is revoked or otherwise invalid, a valid Auth token will NOT be issued in the response headers.
     * @deprecated
     */
    jwtRefreshToken?: Maybe<Scalars['String']>
    /**
     * A unique secret tied to the users JWT token that can be revoked or refreshed. Revoking the secret prevents JWT tokens from being issued to the user. Refreshing the token invalidates previously issued tokens, but allows new tokens to be issued.
     * @deprecated
     */
    jwtUserSecret?: Maybe<Scalars['String']>
    /**
     * Last name of the user. This is equivalent to the WP_User-&gt;user_last_name property.
     * @deprecated
     */
    lastName?: Maybe<Scalars['String']>
    /**
     * The preferred language locale set for the user. Value derived from get_user_locale().
     * @deprecated
     */
    locale?: Maybe<Scalars['String']>
    /**
     * Connection between the User type and the mediaItem type
     * @deprecated
     */
    mediaItems?: Maybe<UserToMediaItemConnection>
    /**
     * Display name of the user. This is equivalent to the WP_User-&gt;dispaly_name property.
     * @deprecated
     */
    name?: Maybe<Scalars['String']>
    /**
     * The nicename for the user. This field is equivalent to WP_User-&gt;user_nicename
     * @deprecated
     */
    nicename?: Maybe<Scalars['String']>
    /**
     * Nickname of the user.
     * @deprecated
     */
    nickname?: Maybe<Scalars['String']>
    /**
     * Connection between the User type and the page type
     * @deprecated
     */
    pages?: Maybe<UserToPageConnection>
    /**
     * Connection between the User type and the post type
     * @deprecated
     */
    posts?: Maybe<UserToPostConnection>
    /**
     * The date the user registered or was created. The field follows a full ISO8601 date string format.
     * @deprecated
     */
    registeredDate?: Maybe<Scalars['String']>
    /**
     * Connection between the User and Revisions authored by the user
     * @deprecated
     */
    revisions?: Maybe<UserToContentRevisionUnionConnection>
    /**
     * Connection between the User type and the UserRole type
     * @deprecated
     */
    roles?: Maybe<UserToUserRoleConnection>
    /**
     * The slug for the user. This field is equivalent to WP_User-&gt;user_nicename
     * @deprecated
     */
    slug?: Maybe<Scalars['String']>
    /**
     * The unique resource identifier path
     * @deprecated
     */
    uri: Scalars['String']
    /**
     * A website url that is associated with the user.
     * @deprecated
     */
    url?: Maybe<Scalars['String']>
    /**
     * The Id of the user. Equivalent to WP_User-&gt;ID
     * @deprecated
     */
    userId?: Maybe<Scalars['Int']>
    /**
     * Username for the user. This field is equivalent to WP_User-&gt;user_login.
     * @deprecated
     */
    username?: Maybe<Scalars['String']>
  }

/** A User object */
export type UserAvatarArgs = {
  size?: Maybe<Scalars['Int']>
  forceDefault?: Maybe<Scalars['Boolean']>
  rating?: Maybe<AvatarRatingEnum>
}

/** A User object */
export type UserCommentsArgs = {
  first?: Maybe<Scalars['Int']>
  last?: Maybe<Scalars['Int']>
  after?: Maybe<Scalars['String']>
  before?: Maybe<Scalars['String']>
  where?: Maybe<UserToCommentConnectionWhereArgs>
}

/** A User object */
export type UserMediaItemsArgs = {
  first?: Maybe<Scalars['Int']>
  last?: Maybe<Scalars['Int']>
  after?: Maybe<Scalars['String']>
  before?: Maybe<Scalars['String']>
  where?: Maybe<UserToMediaItemConnectionWhereArgs>
}

/** A User object */
export type UserPagesArgs = {
  first?: Maybe<Scalars['Int']>
  last?: Maybe<Scalars['Int']>
  after?: Maybe<Scalars['String']>
  before?: Maybe<Scalars['String']>
  where?: Maybe<UserToPageConnectionWhereArgs>
}

/** A User object */
export type UserPostsArgs = {
  first?: Maybe<Scalars['Int']>
  last?: Maybe<Scalars['Int']>
  after?: Maybe<Scalars['String']>
  before?: Maybe<Scalars['String']>
  where?: Maybe<UserToPostConnectionWhereArgs>
}

/** A User object */
export type UserRevisionsArgs = {
  first?: Maybe<Scalars['Int']>
  last?: Maybe<Scalars['Int']>
  after?: Maybe<Scalars['String']>
  before?: Maybe<Scalars['String']>
  where?: Maybe<UserToContentRevisionUnionConnectionWhereArgs>
}

/** A User object */
export type UserRolesArgs = {
  first?: Maybe<Scalars['Int']>
  last?: Maybe<Scalars['Int']>
  after?: Maybe<Scalars['String']>
  before?: Maybe<Scalars['String']>
}

/** What rating to display avatars up to. Accepts 'G', 'PG', 'R', 'X', and are judged in that order. Default is the value of the 'avatar_rating' option */
export enum AvatarRatingEnum {
  G = 'G',
  Pg = 'PG',
  R = 'R',
  X = 'X',
}

/** Avatars are profile images for users. WordPress by default uses the Gravatar service to host and fetch avatars from. */
export type Avatar = {
  __typename?: 'Avatar'
  /**
   * URL for the default image or a default type. Accepts &#039;404&#039; (return a 404 instead of a default image), &#039;retro&#039; (8bit), &#039;monsterid&#039; (monster), &#039;wavatar&#039; (cartoon face), &#039;indenticon&#039; (the &#039;quilt&#039;), &#039;mystery&#039;, &#039;mm&#039;, or &#039;mysteryman&#039; (The Oyster Man), &#039;blank&#039; (transparent GIF), or &#039;gravatar_default&#039; (the Gravatar logo).
   * @deprecated
   */
  default?: Maybe<Scalars['String']>
  /**
   * HTML attributes to insert in the IMG element. Is not sanitized.
   * @deprecated
   */
  extraAttr?: Maybe<Scalars['String']>
  /**
   * Whether to always show the default image, never the Gravatar.
   * @deprecated
   */
  forceDefault?: Maybe<Scalars['Boolean']>
  /**
   * Whether the avatar was successfully found.
   * @deprecated
   */
  foundAvatar?: Maybe<Scalars['Boolean']>
  /**
   * Height of the avatar image.
   * @deprecated
   */
  height?: Maybe<Scalars['Int']>
  /**
   * Whether the object is restricted from the current viewer
   * @deprecated
   */
  isRestricted?: Maybe<Scalars['Boolean']>
  /**
   * What rating to display avatars up to. Accepts &#039;G&#039;, &#039;PG&#039;, &#039;R&#039;, &#039;X&#039;, and are judged in that order.
   * @deprecated
   */
  rating?: Maybe<Scalars['String']>
  /**
   * Type of url scheme to use. Typically HTTP vs. HTTPS.
   * @deprecated
   */
  scheme?: Maybe<Scalars['String']>
  /**
   * The size of the avatar in pixels. A value of 96 will match a 96px x 96px gravatar image.
   * @deprecated
   */
  size?: Maybe<Scalars['Int']>
  /**
   * URL for the gravatar image source.
   * @deprecated
   */
  url?: Maybe<Scalars['String']>
  /**
   * Width of the avatar image.
   * @deprecated
   */
  width?: Maybe<Scalars['Int']>
}

/** Arguments for filtering the UserToCommentConnection connection */
export type UserToCommentConnectionWhereArgs = {
  /** Comment author email address. */
  authorEmail?: Maybe<Scalars['String']>
  /** Array of author IDs to include comments for. */
  authorIn?: Maybe<Array<Maybe<Scalars['ID']>>>
  /** Array of author IDs to exclude comments for. */
  authorNotIn?: Maybe<Array<Maybe<Scalars['ID']>>>
  /** Comment author URL. */
  authorUrl?: Maybe<Scalars['String']>
  /** Array of comment IDs to include. */
  commentIn?: Maybe<Array<Maybe<Scalars['ID']>>>
  /**
   * Array of IDs of users whose unapproved comments will be returned by the
   * 							query regardless of status.
   */
  commentNotIn?: Maybe<Array<Maybe<Scalars['ID']>>>
  /** Include comments of a given type. */
  commentType?: Maybe<Scalars['String']>
  /** Include comments from a given array of comment types. */
  commentTypeIn?: Maybe<Array<Maybe<Scalars['String']>>>
  /** Exclude comments from a given array of comment types. */
  commentTypeNotIn?: Maybe<Scalars['String']>
  /** Content object author ID to limit results by. */
  contentAuthor?: Maybe<Array<Maybe<Scalars['ID']>>>
  /** Array of author IDs to retrieve comments for. */
  contentAuthorIn?: Maybe<Array<Maybe<Scalars['ID']>>>
  /** Array of author IDs *not* to retrieve comments for. */
  contentAuthorNotIn?: Maybe<Array<Maybe<Scalars['ID']>>>
  /**
   * Limit results to those affiliated with a given content object
   * 							ID.
   */
  contentId?: Maybe<Scalars['ID']>
  /**
   * Array of content object IDs to include affiliated comments
   * 							for.
   */
  contentIdIn?: Maybe<Array<Maybe<Scalars['ID']>>>
  /**
   * Array of content object IDs to exclude affiliated comments
   * 							for.
   */
  contentIdNotIn?: Maybe<Array<Maybe<Scalars['ID']>>>
  /** Content object name to retrieve affiliated comments for. */
  contentName?: Maybe<Scalars['String']>
  /** Content Object parent ID to retrieve affiliated comments for. */
  contentParent?: Maybe<Scalars['Int']>
  /**
   * Array of content object statuses to retrieve affiliated comments for.
   * 							Pass 'any' to match any value.
   */
  contentStatus?: Maybe<Array<Maybe<PostStatusEnum>>>
  /** Content object type or array of types to retrieve affiliated comments for. Pass 'any' to match any value. */
  contentType?: Maybe<Array<Maybe<ContentTypeEnum>>>
  /** Array of IDs or email addresses of users whose unapproved comments will be returned by the query regardless of $status. Default empty */
  includeUnapproved?: Maybe<Array<Maybe<Scalars['ID']>>>
  /** Karma score to retrieve matching comments for. */
  karma?: Maybe<Scalars['Int']>
  /** The cardinality of the order of the connection */
  order?: Maybe<OrderEnum>
  /** Field to order the comments by. */
  orderby?: Maybe<CommentsConnectionOrderbyEnum>
  /** Parent ID of comment to retrieve children of. */
  parent?: Maybe<Scalars['Int']>
  /** Array of parent IDs of comments to retrieve children for. */
  parentIn?: Maybe<Array<Maybe<Scalars['ID']>>>
  /**
   * Array of parent IDs of comments *not* to retrieve children
   * 							for.
   */
  parentNotIn?: Maybe<Array<Maybe<Scalars['ID']>>>
  /** Search term(s) to retrieve matching comments for. */
  search?: Maybe<Scalars['String']>
  /** Comment status to limit results by. */
  status?: Maybe<Scalars['String']>
  /** Include comments for a specific user ID. */
  userId?: Maybe<Scalars['ID']>
}

/** Allowed Content Types */
export enum ContentTypeEnum {
  /** The Type of Content object */
  Attachment = 'ATTACHMENT',
  /** The Type of Content object */
  Page = 'PAGE',
  /** The Type of Content object */
  Post = 'POST',
}

/** Options for ordering the connection */
export enum CommentsConnectionOrderbyEnum {
  CommentAgent = 'COMMENT_AGENT',
  CommentApproved = 'COMMENT_APPROVED',
  CommentAuthor = 'COMMENT_AUTHOR',
  CommentAuthorEmail = 'COMMENT_AUTHOR_EMAIL',
  CommentAuthorIp = 'COMMENT_AUTHOR_IP',
  CommentAuthorUrl = 'COMMENT_AUTHOR_URL',
  CommentContent = 'COMMENT_CONTENT',
  CommentDate = 'COMMENT_DATE',
  CommentDateGmt = 'COMMENT_DATE_GMT',
  CommentId = 'COMMENT_ID',
  CommentIn = 'COMMENT_IN',
  CommentKarma = 'COMMENT_KARMA',
  CommentParent = 'COMMENT_PARENT',
  CommentPostId = 'COMMENT_POST_ID',
  CommentType = 'COMMENT_TYPE',
  UserId = 'USER_ID',
}

/** Connection between the User type and the Comment type */
export type UserToCommentConnection = {
  __typename?: 'UserToCommentConnection'
  /**
   * Edges for the UserToCommentConnection connection
   * @deprecated
   */
  edges?: Maybe<Array<Maybe<UserToCommentConnectionEdge>>>
  /**
   * The nodes of the connection, without the edges
   * @deprecated
   */
  nodes?: Maybe<Array<Maybe<Comment>>>
  /**
   * Information about pagination in a connection.
   * @deprecated
   */
  pageInfo?: Maybe<WpPageInfo>
}

/** An edge in a connection */
export type UserToCommentConnectionEdge = {
  __typename?: 'UserToCommentConnectionEdge'
  /**
   * A cursor for use in pagination
   * @deprecated
   */
  cursor?: Maybe<Scalars['String']>
  /**
   * The item at the end of the edge
   * @deprecated
   */
  node?: Maybe<Comment>
}

/** A Comment object */
export type Comment = Node & {
  __typename?: 'Comment'
  /**
   * User agent used to post the comment. This field is equivalent to WP_Comment-&gt;comment_agent and the value matching the &quot;comment_agent&quot; column in SQL.
   * @deprecated
   */
  agent?: Maybe<Scalars['String']>
  /**
   * The approval status of the comment. This field is equivalent to WP_Comment-&gt;comment_approved and the value matching the &quot;comment_approved&quot; column in SQL.
   * @deprecated
   */
  approved?: Maybe<Scalars['Boolean']>
  /**
   * The author of the comment
   * @deprecated
   */
  author?: Maybe<CommentAuthorUnion>
  /**
   * IP address for the author. This field is equivalent to WP_Comment-&gt;comment_author_IP and the value matching the &quot;comment_author_IP&quot; column in SQL.
   * @deprecated
   */
  authorIp?: Maybe<Scalars['String']>
  /**
   * Connection between the Comment type and the Comment type
   * @deprecated
   */
  children?: Maybe<CommentToCommentConnection>
  /**
   * ID for the comment, unique among comments.
   * @deprecated
   */
  commentId?: Maybe<Scalars['Int']>
  /**
   * The object the comment was added to
   * @deprecated
   */
  commentedOn?: Maybe<PostObjectUnion>
  /**
   * Content of the comment. This field is equivalent to WP_Comment-&gt;comment_content and the value matching the &quot;comment_content&quot; column in SQL.
   * @deprecated
   */
  content?: Maybe<Scalars['String']>
  /**
   * Date the comment was posted in local time. This field is equivalent to WP_Comment-&gt;date and the value matching the &quot;date&quot; column in SQL.
   * @deprecated
   */
  date?: Maybe<Scalars['String']>
  /**
   * Date the comment was posted in GMT. This field is equivalent to WP_Comment-&gt;date_gmt and the value matching the &quot;date_gmt&quot; column in SQL.
   * @deprecated
   */
  dateGmt?: Maybe<Scalars['String']>
  /**
   * The globally unique identifier for the comment object
   * @deprecated
   */
  id: Scalars['ID']
  /**
   * Whether the object is restricted from the current viewer
   * @deprecated
   */
  isRestricted?: Maybe<Scalars['Boolean']>
  /**
   * Karma value for the comment. This field is equivalent to WP_Comment-&gt;comment_karma and the value matching the &quot;comment_karma&quot; column in SQL.
   * @deprecated
   */
  karma?: Maybe<Scalars['Int']>
  /**
   * Added to the GraphQL Schema because the ACF Field Group &quot;Comment like&quot; was assigned to Comments
   * @deprecated
   */
  likes?: Maybe<Comment_Likes>
  /**
   * Parent comment of current comment. This field is equivalent to the WP_Comment instance matching the WP_Comment-&gt;comment_parent ID.
   * @deprecated
   */
  parent?: Maybe<Comment>
  /**
   * Type of comment. This field is equivalent to WP_Comment-&gt;comment_type and the value matching the &quot;comment_type&quot; column in SQL.
   * @deprecated
   */
  type?: Maybe<Scalars['String']>
}

/** A Comment object */
export type CommentChildrenArgs = {
  first?: Maybe<Scalars['Int']>
  last?: Maybe<Scalars['Int']>
  after?: Maybe<Scalars['String']>
  before?: Maybe<Scalars['String']>
  where?: Maybe<CommentToCommentConnectionWhereArgs>
}

/** A Comment object */
export type CommentContentArgs = {
  format?: Maybe<PostObjectFieldFormatEnum>
}

export type CommentAuthorUnion = User | CommentAuthor

/** A Comment Author object */
export type CommentAuthor = Node & {
  __typename?: 'CommentAuthor'
  /**
   * The email for the comment author
   * @deprecated
   */
  email?: Maybe<Scalars['String']>
  /**
   * The globally unique identifier for the comment author object
   * @deprecated
   */
  id: Scalars['ID']
  /**
   * Whether the object is restricted from the current viewer
   * @deprecated
   */
  isRestricted?: Maybe<Scalars['Boolean']>
  /**
   * The name for the comment author.
   * @deprecated
   */
  name?: Maybe<Scalars['String']>
  /**
   * The url the comment author.
   * @deprecated
   */
  url?: Maybe<Scalars['String']>
}

/** Arguments for filtering the CommentToCommentConnection connection */
export type CommentToCommentConnectionWhereArgs = {
  /** Comment author email address. */
  authorEmail?: Maybe<Scalars['String']>
  /** Array of author IDs to include comments for. */
  authorIn?: Maybe<Array<Maybe<Scalars['ID']>>>
  /** Array of author IDs to exclude comments for. */
  authorNotIn?: Maybe<Array<Maybe<Scalars['ID']>>>
  /** Comment author URL. */
  authorUrl?: Maybe<Scalars['String']>
  /** Array of comment IDs to include. */
  commentIn?: Maybe<Array<Maybe<Scalars['ID']>>>
  /**
   * Array of IDs of users whose unapproved comments will be returned by the
   * 							query regardless of status.
   */
  commentNotIn?: Maybe<Array<Maybe<Scalars['ID']>>>
  /** Include comments of a given type. */
  commentType?: Maybe<Scalars['String']>
  /** Include comments from a given array of comment types. */
  commentTypeIn?: Maybe<Array<Maybe<Scalars['String']>>>
  /** Exclude comments from a given array of comment types. */
  commentTypeNotIn?: Maybe<Scalars['String']>
  /** Content object author ID to limit results by. */
  contentAuthor?: Maybe<Array<Maybe<Scalars['ID']>>>
  /** Array of author IDs to retrieve comments for. */
  contentAuthorIn?: Maybe<Array<Maybe<Scalars['ID']>>>
  /** Array of author IDs *not* to retrieve comments for. */
  contentAuthorNotIn?: Maybe<Array<Maybe<Scalars['ID']>>>
  /**
   * Limit results to those affiliated with a given content object
   * 							ID.
   */
  contentId?: Maybe<Scalars['ID']>
  /**
   * Array of content object IDs to include affiliated comments
   * 							for.
   */
  contentIdIn?: Maybe<Array<Maybe<Scalars['ID']>>>
  /**
   * Array of content object IDs to exclude affiliated comments
   * 							for.
   */
  contentIdNotIn?: Maybe<Array<Maybe<Scalars['ID']>>>
  /** Content object name to retrieve affiliated comments for. */
  contentName?: Maybe<Scalars['String']>
  /** Content Object parent ID to retrieve affiliated comments for. */
  contentParent?: Maybe<Scalars['Int']>
  /**
   * Array of content object statuses to retrieve affiliated comments for.
   * 							Pass 'any' to match any value.
   */
  contentStatus?: Maybe<Array<Maybe<PostStatusEnum>>>
  /** Content object type or array of types to retrieve affiliated comments for. Pass 'any' to match any value. */
  contentType?: Maybe<Array<Maybe<ContentTypeEnum>>>
  /** Array of IDs or email addresses of users whose unapproved comments will be returned by the query regardless of $status. Default empty */
  includeUnapproved?: Maybe<Array<Maybe<Scalars['ID']>>>
  /** Karma score to retrieve matching comments for. */
  karma?: Maybe<Scalars['Int']>
  /** The cardinality of the order of the connection */
  order?: Maybe<OrderEnum>
  /** Field to order the comments by. */
  orderby?: Maybe<CommentsConnectionOrderbyEnum>
  /** Parent ID of comment to retrieve children of. */
  parent?: Maybe<Scalars['Int']>
  /** Array of parent IDs of comments to retrieve children for. */
  parentIn?: Maybe<Array<Maybe<Scalars['ID']>>>
  /**
   * Array of parent IDs of comments *not* to retrieve children
   * 							for.
   */
  parentNotIn?: Maybe<Array<Maybe<Scalars['ID']>>>
  /** Search term(s) to retrieve matching comments for. */
  search?: Maybe<Scalars['String']>
  /** Comment status to limit results by. */
  status?: Maybe<Scalars['String']>
  /** Include comments for a specific user ID. */
  userId?: Maybe<Scalars['ID']>
}

/** Connection between the Comment type and the Comment type */
export type CommentToCommentConnection = {
  __typename?: 'CommentToCommentConnection'
  /**
   * Edges for the CommentToCommentConnection connection
   * @deprecated
   */
  edges?: Maybe<Array<Maybe<CommentToCommentConnectionEdge>>>
  /**
   * The nodes of the connection, without the edges
   * @deprecated
   */
  nodes?: Maybe<Array<Maybe<Comment>>>
  /**
   * Information about pagination in a connection.
   * @deprecated
   */
  pageInfo?: Maybe<WpPageInfo>
}

/** An edge in a connection */
export type CommentToCommentConnectionEdge = {
  __typename?: 'CommentToCommentConnectionEdge'
  /**
   * A cursor for use in pagination
   * @deprecated
   */
  cursor?: Maybe<Scalars['String']>
  /**
   * The item at the end of the edge
   * @deprecated
   */
  node?: Maybe<Comment>
}

export type PostObjectUnion = Post | Page | MediaItem

/** The page type */
export type Page = Node &
  ContentNode &
  UniformResourceIdentifiable &
  NodeWithTitle &
  NodeWithContentEditor &
  NodeWithAuthor &
  NodeWithFeaturedImage &
  NodeWithComments &
  NodeWithRevisions &
  NodeWithPageAttributes &
  HierarchicalContentNode & {
    __typename?: 'Page'
    /**
     * The author field will return a queryable User type matching the post&#039;s author.
     * @deprecated
     */
    author?: Maybe<User>
    /**
     * Connection between the page type and the page type
     * @deprecated
     */
    childPages?: Maybe<PageToPageConnection>
    /**
     * The number of comments. Even though WPGraphQL denotes this field as an integer, in WordPress this field should be saved as a numeric string for compatibility.
     * @deprecated
     */
    commentCount?: Maybe<Scalars['Int']>
    /**
     * Whether the comments are open or closed for this particular post.
     * @deprecated
     */
    commentStatus?: Maybe<Scalars['String']>
    /**
     * Connection between the page type and the Comment type
     * @deprecated
     */
    comments?: Maybe<PageToCommentConnection>
    /**
     * The content of the post.
     * @deprecated
     */
    content?: Maybe<Scalars['String']>
    /**
     * Connection between the page type and the ContentType type
     * @deprecated
     */
    contentType?: Maybe<PageToContentTypeConnection>
    /**
     * The ID of the object in the database.
     * @deprecated
     */
    databaseId: Scalars['Int']
    /**
     * Post publishing date.
     * @deprecated
     */
    date?: Maybe<Scalars['String']>
    /**
     * The publishing date set in GMT.
     * @deprecated
     */
    dateGmt?: Maybe<Scalars['String']>
    /**
     * The desired slug of the post
     * @deprecated
     */
    desiredSlug?: Maybe<Scalars['String']>
    /**
     * The user that most recently edited the object
     * @deprecated
     */
    editLast?: Maybe<User>
    /**
     * If a user has edited the object within the past 15 seconds, this will return the user and the time they last edited. Null if the edit lock doesn&#039;t exist or is greater than 15 seconds
     * @deprecated
     */
    editLock?: Maybe<EditLock>
    /**
     * The RSS enclosure for the object
     * @deprecated
     */
    enclosure?: Maybe<Scalars['String']>
    /**
     * The featured image for the object
     * @deprecated
     */
    featuredImage?: Maybe<MediaItem>
    /**
     * The global unique identifier for this post. This currently matches the value stored in WP_Post-&gt;guid and the guid column in the &quot;post_objects&quot; database table.
     * @deprecated
     */
    guid?: Maybe<Scalars['String']>
    /**
     * The globally unique identifier of the page object.
     * @deprecated
     */
    id: Scalars['ID']
    /**
     * Whether this page is set to the static front page.
     * @deprecated
     */
    isFrontPage: Scalars['Boolean']
    /**
     * Whether the object is restricted from the current viewer
     * @deprecated
     */
    isRestricted?: Maybe<Scalars['Boolean']>
    /**
     * True if the node is a revision of another node
     * @deprecated
     */
    isRevision?: Maybe<Scalars['Boolean']>
    /**
     * The permalink of the post
     * @deprecated
     */
    link?: Maybe<Scalars['String']>
    /**
     * A field used for ordering posts. This is typically used with nav menu items or for special ordering of hierarchical content types.
     * @deprecated
     */
    menuOrder?: Maybe<Scalars['Int']>
    /**
     * The local modified time for a post. If a post was recently updated the modified field will change to match the corresponding time.
     * @deprecated
     */
    modified?: Maybe<Scalars['String']>
    /**
     * The GMT modified time for a post. If a post was recently updated the modified field will change to match the corresponding time in GMT.
     * @deprecated
     */
    modifiedGmt?: Maybe<Scalars['String']>
    /**
     * The id field matches the WP_Post-&gt;ID field.
     * @deprecated Deprecated in favor of the databaseId field
     */
    pageId: Scalars['Int']
    /**
     * The parent of the object. The parent object can be of various types
     * @deprecated
     */
    parent?: Maybe<PostObjectUnion>
    /**
     * If the current node is a revision, this field exposes the node this is a revision of. Returns null if the node is not a revision of another node.
     * @deprecated
     */
    revisionOf?: Maybe<PostObjectUnion>
    /**
     * Connection between the page type and the page type
     * @deprecated
     */
    revisions?: Maybe<PageToRevisionConnection>
    /** @deprecated  */
    showMenu?: Maybe<Page_Showmenu>
    /**
     * The uri slug for the post. This is equivalent to the WP_Post-&gt;post_name field and the post_name column in the database for the &quot;post_objects&quot; table.
     * @deprecated
     */
    slug?: Maybe<Scalars['String']>
    /**
     * The current status of the object
     * @deprecated
     */
    status?: Maybe<Scalars['String']>
    /**
     * The template assigned to the node
     * @deprecated
     */
    template?: Maybe<ContentTemplateUnion>
    /**
     * The title of the post. This is currently just the raw title. An amendment to support rendered title needs to be made.
     * @deprecated
     */
    title?: Maybe<Scalars['String']>
    /**
     * URI path for the resource
     * @deprecated
     */
    uri: Scalars['String']
  }

/** The page type */
export type PageChildPagesArgs = {
  first?: Maybe<Scalars['Int']>
  last?: Maybe<Scalars['Int']>
  after?: Maybe<Scalars['String']>
  before?: Maybe<Scalars['String']>
  where?: Maybe<PageToPageConnectionWhereArgs>
}

/** The page type */
export type PageCommentsArgs = {
  first?: Maybe<Scalars['Int']>
  last?: Maybe<Scalars['Int']>
  after?: Maybe<Scalars['String']>
  before?: Maybe<Scalars['String']>
  where?: Maybe<PageToCommentConnectionWhereArgs>
}

/** The page type */
export type PageContentArgs = {
  format?: Maybe<PostObjectFieldFormatEnum>
}

/** The page type */
export type PageRevisionsArgs = {
  first?: Maybe<Scalars['Int']>
  last?: Maybe<Scalars['Int']>
  after?: Maybe<Scalars['String']>
  before?: Maybe<Scalars['String']>
  where?: Maybe<PageToRevisionConnectionWhereArgs>
}

/** The page type */
export type PageTitleArgs = {
  format?: Maybe<PostObjectFieldFormatEnum>
}

/** A node that NodeWith a title */
export type NodeWithTitle = {
  /** The title of the post. This is currently just the raw title. An amendment to support rendered title needs to be made. */
  title?: Maybe<Scalars['String']>
}

/** A node that NodeWith a title */
export type NodeWithTitleTitleArgs = {
  format?: Maybe<PostObjectFieldFormatEnum>
}

/** The format of post field data. */
export enum PostObjectFieldFormatEnum {
  /** Provide the field value directly from database */
  Raw = 'RAW',
  /** Apply the default WordPress rendering */
  Rendered = 'RENDERED',
}

/** A node that supports the content editor */
export type NodeWithContentEditor = {
  /** The content of the post. */
  content?: Maybe<Scalars['String']>
}

/** A node that supports the content editor */
export type NodeWithContentEditorContentArgs = {
  format?: Maybe<PostObjectFieldFormatEnum>
}

/** A node that can have an author assigned to it */
export type NodeWithAuthor = {
  /** The author field will return a queryable User type matching the post's author. */
  author?: Maybe<User>
}

/** A node that can have a featured image set */
export type NodeWithFeaturedImage = {
  /** The featured image for the object */
  featuredImage?: Maybe<MediaItem>
}

/** The mediaItem type */
export type MediaItem = Node &
  ContentNode &
  UniformResourceIdentifiable &
  NodeWithTitle &
  NodeWithAuthor &
  NodeWithComments &
  HierarchicalContentNode & {
    __typename?: 'MediaItem'
    /**
     * Alternative text to display when resource is not displayed
     * @deprecated
     */
    altText?: Maybe<Scalars['String']>
    /**
     * The author field will return a queryable User type matching the post&#039;s author.
     * @deprecated
     */
    author?: Maybe<User>
    /**
     * The caption for the resource
     * @deprecated
     */
    caption?: Maybe<Scalars['String']>
    /**
     * The number of comments. Even though WPGraphQL denotes this field as an integer, in WordPress this field should be saved as a numeric string for compatibility.
     * @deprecated
     */
    commentCount?: Maybe<Scalars['Int']>
    /**
     * Whether the comments are open or closed for this particular post.
     * @deprecated
     */
    commentStatus?: Maybe<Scalars['String']>
    /**
     * Connection between the mediaItem type and the Comment type
     * @deprecated
     */
    comments?: Maybe<MediaItemToCommentConnection>
    /**
     * Connection between the mediaItem type and the ContentType type
     * @deprecated
     */
    contentType?: Maybe<MediaItemToContentTypeConnection>
    /**
     * The ID of the object in the database.
     * @deprecated
     */
    databaseId: Scalars['Int']
    /**
     * Post publishing date.
     * @deprecated
     */
    date?: Maybe<Scalars['String']>
    /**
     * The publishing date set in GMT.
     * @deprecated
     */
    dateGmt?: Maybe<Scalars['String']>
    /**
     * Description of the image (stored as post_content)
     * @deprecated
     */
    description?: Maybe<Scalars['String']>
    /**
     * The desired slug of the post
     * @deprecated
     */
    desiredSlug?: Maybe<Scalars['String']>
    /**
     * The user that most recently edited the object
     * @deprecated
     */
    editLast?: Maybe<User>
    /**
     * If a user has edited the object within the past 15 seconds, this will return the user and the time they last edited. Null if the edit lock doesn&#039;t exist or is greater than 15 seconds
     * @deprecated
     */
    editLock?: Maybe<EditLock>
    /**
     * The RSS enclosure for the object
     * @deprecated
     */
    enclosure?: Maybe<Scalars['String']>
    /**
     * The global unique identifier for this post. This currently matches the value stored in WP_Post-&gt;guid and the guid column in the &quot;post_objects&quot; database table.
     * @deprecated
     */
    guid?: Maybe<Scalars['String']>
    /**
     * The globally unique identifier of the attachment object.
     * @deprecated
     */
    id: Scalars['ID']
    /**
     * Whether the object is restricted from the current viewer
     * @deprecated
     */
    isRestricted?: Maybe<Scalars['Boolean']>
    /**
     * The permalink of the post
     * @deprecated
     */
    link?: Maybe<Scalars['String']>
    /**
     * Details about the mediaItem
     * @deprecated
     */
    mediaDetails?: Maybe<MediaDetails>
    /**
     * The id field matches the WP_Post-&gt;ID field.
     * @deprecated Deprecated in favor of the databaseId field
     */
    mediaItemId: Scalars['Int']
    /**
     * Url of the mediaItem
     * @deprecated
     */
    mediaItemUrl?: Maybe<Scalars['String']>
    /**
     * Type of resource
     * @deprecated
     */
    mediaType?: Maybe<Scalars['String']>
    /**
     * The mime type of the mediaItem
     * @deprecated
     */
    mimeType?: Maybe<Scalars['String']>
    /**
     * The local modified time for a post. If a post was recently updated the modified field will change to match the corresponding time.
     * @deprecated
     */
    modified?: Maybe<Scalars['String']>
    /**
     * The GMT modified time for a post. If a post was recently updated the modified field will change to match the corresponding time in GMT.
     * @deprecated
     */
    modifiedGmt?: Maybe<Scalars['String']>
    /**
     * The parent of the object. The parent object can be of various types
     * @deprecated
     */
    parent?: Maybe<PostObjectUnion>
    /**
     * The sizes attribute value for an image.
     * @deprecated
     */
    sizes?: Maybe<Scalars['String']>
    /**
     * The uri slug for the post. This is equivalent to the WP_Post-&gt;post_name field and the post_name column in the database for the &quot;post_objects&quot; table.
     * @deprecated
     */
    slug?: Maybe<Scalars['String']>
    /**
     * Url of the mediaItem
     * @deprecated
     */
    sourceUrl?: Maybe<Scalars['String']>
    /**
     * The srcset attribute specifies the URL of the image to use in different situations. It is a comma separated string of urls and their widths.
     * @deprecated
     */
    srcSet?: Maybe<Scalars['String']>
    /**
     * The current status of the object
     * @deprecated
     */
    status?: Maybe<Scalars['String']>
    /**
     * The template assigned to the node
     * @deprecated
     */
    template?: Maybe<ContentTemplateUnion>
    /**
     * Terms connected to the object
     * @deprecated
     */
    termNames?: Maybe<Array<Maybe<Scalars['String']>>>
    /**
     * Terms connected to the object
     * @deprecated
     */
    termSlugs?: Maybe<Array<Maybe<Scalars['String']>>>
    /**
     * Terms connected to the object
     * @deprecated
     */
    terms?: Maybe<Array<Maybe<TermObjectUnion>>>
    /**
     * The title of the post. This is currently just the raw title. An amendment to support rendered title needs to be made.
     * @deprecated
     */
    title?: Maybe<Scalars['String']>
    /**
     * URI path for the resource
     * @deprecated
     */
    uri: Scalars['String']
  }

/** The mediaItem type */
export type MediaItemCaptionArgs = {
  format?: Maybe<PostObjectFieldFormatEnum>
}

/** The mediaItem type */
export type MediaItemCommentsArgs = {
  first?: Maybe<Scalars['Int']>
  last?: Maybe<Scalars['Int']>
  after?: Maybe<Scalars['String']>
  before?: Maybe<Scalars['String']>
  where?: Maybe<MediaItemToCommentConnectionWhereArgs>
}

/** The mediaItem type */
export type MediaItemDescriptionArgs = {
  format?: Maybe<PostObjectFieldFormatEnum>
}

/** The mediaItem type */
export type MediaItemSizesArgs = {
  size?: Maybe<MediaItemSizeEnum>
}

/** The mediaItem type */
export type MediaItemSourceUrlArgs = {
  size?: Maybe<MediaItemSizeEnum>
}

/** The mediaItem type */
export type MediaItemSrcSetArgs = {
  size?: Maybe<MediaItemSizeEnum>
}

/** The mediaItem type */
export type MediaItemTermNamesArgs = {
  taxonomies?: Maybe<Array<Maybe<TaxonomyEnum>>>
}

/** The mediaItem type */
export type MediaItemTermSlugsArgs = {
  taxonomies?: Maybe<Array<Maybe<TaxonomyEnum>>>
}

/** The mediaItem type */
export type MediaItemTermsArgs = {
  taxonomies?: Maybe<Array<Maybe<TaxonomyEnum>>>
}

/** The mediaItem type */
export type MediaItemTitleArgs = {
  format?: Maybe<PostObjectFieldFormatEnum>
}

/** A node that can have comments associated with it */
export type NodeWithComments = {
  /** The number of comments. Even though WPGraphQL denotes this field as an integer, in WordPress this field should be saved as a numeric string for compatibility. */
  commentCount?: Maybe<Scalars['Int']>
  /** Whether the comments are open or closed for this particular post. */
  commentStatus?: Maybe<Scalars['String']>
}

/** Content node with hierarchical (parent/child) relationships */
export type HierarchicalContentNode = {
  /** The parent of the object. The parent object can be of various types */
  parent?: Maybe<PostObjectUnion>
}

/** Arguments for filtering the MediaItemToCommentConnection connection */
export type MediaItemToCommentConnectionWhereArgs = {
  /** Comment author email address. */
  authorEmail?: Maybe<Scalars['String']>
  /** Array of author IDs to include comments for. */
  authorIn?: Maybe<Array<Maybe<Scalars['ID']>>>
  /** Array of author IDs to exclude comments for. */
  authorNotIn?: Maybe<Array<Maybe<Scalars['ID']>>>
  /** Comment author URL. */
  authorUrl?: Maybe<Scalars['String']>
  /** Array of comment IDs to include. */
  commentIn?: Maybe<Array<Maybe<Scalars['ID']>>>
  /**
   * Array of IDs of users whose unapproved comments will be returned by the
   * 							query regardless of status.
   */
  commentNotIn?: Maybe<Array<Maybe<Scalars['ID']>>>
  /** Include comments of a given type. */
  commentType?: Maybe<Scalars['String']>
  /** Include comments from a given array of comment types. */
  commentTypeIn?: Maybe<Array<Maybe<Scalars['String']>>>
  /** Exclude comments from a given array of comment types. */
  commentTypeNotIn?: Maybe<Scalars['String']>
  /** Content object author ID to limit results by. */
  contentAuthor?: Maybe<Array<Maybe<Scalars['ID']>>>
  /** Array of author IDs to retrieve comments for. */
  contentAuthorIn?: Maybe<Array<Maybe<Scalars['ID']>>>
  /** Array of author IDs *not* to retrieve comments for. */
  contentAuthorNotIn?: Maybe<Array<Maybe<Scalars['ID']>>>
  /**
   * Limit results to those affiliated with a given content object
   * 							ID.
   */
  contentId?: Maybe<Scalars['ID']>
  /**
   * Array of content object IDs to include affiliated comments
   * 							for.
   */
  contentIdIn?: Maybe<Array<Maybe<Scalars['ID']>>>
  /**
   * Array of content object IDs to exclude affiliated comments
   * 							for.
   */
  contentIdNotIn?: Maybe<Array<Maybe<Scalars['ID']>>>
  /** Content object name to retrieve affiliated comments for. */
  contentName?: Maybe<Scalars['String']>
  /** Content Object parent ID to retrieve affiliated comments for. */
  contentParent?: Maybe<Scalars['Int']>
  /**
   * Array of content object statuses to retrieve affiliated comments for.
   * 							Pass 'any' to match any value.
   */
  contentStatus?: Maybe<Array<Maybe<PostStatusEnum>>>
  /** Content object type or array of types to retrieve affiliated comments for. Pass 'any' to match any value. */
  contentType?: Maybe<Array<Maybe<ContentTypeEnum>>>
  /** Array of IDs or email addresses of users whose unapproved comments will be returned by the query regardless of $status. Default empty */
  includeUnapproved?: Maybe<Array<Maybe<Scalars['ID']>>>
  /** Karma score to retrieve matching comments for. */
  karma?: Maybe<Scalars['Int']>
  /** The cardinality of the order of the connection */
  order?: Maybe<OrderEnum>
  /** Field to order the comments by. */
  orderby?: Maybe<CommentsConnectionOrderbyEnum>
  /** Parent ID of comment to retrieve children of. */
  parent?: Maybe<Scalars['Int']>
  /** Array of parent IDs of comments to retrieve children for. */
  parentIn?: Maybe<Array<Maybe<Scalars['ID']>>>
  /**
   * Array of parent IDs of comments *not* to retrieve children
   * 							for.
   */
  parentNotIn?: Maybe<Array<Maybe<Scalars['ID']>>>
  /** Search term(s) to retrieve matching comments for. */
  search?: Maybe<Scalars['String']>
  /** Comment status to limit results by. */
  status?: Maybe<Scalars['String']>
  /** Include comments for a specific user ID. */
  userId?: Maybe<Scalars['ID']>
}

/** Connection between the mediaItem type and the Comment type */
export type MediaItemToCommentConnection = {
  __typename?: 'MediaItemToCommentConnection'
  /**
   * Edges for the MediaItemToCommentConnection connection
   * @deprecated
   */
  edges?: Maybe<Array<Maybe<MediaItemToCommentConnectionEdge>>>
  /**
   * The nodes of the connection, without the edges
   * @deprecated
   */
  nodes?: Maybe<Array<Maybe<Comment>>>
  /**
   * Information about pagination in a connection.
   * @deprecated
   */
  pageInfo?: Maybe<WpPageInfo>
}

/** An edge in a connection */
export type MediaItemToCommentConnectionEdge = {
  __typename?: 'MediaItemToCommentConnectionEdge'
  /**
   * A cursor for use in pagination
   * @deprecated
   */
  cursor?: Maybe<Scalars['String']>
  /**
   * The item at the end of the edge
   * @deprecated
   */
  node?: Maybe<Comment>
}

/** Connection between the mediaItem type and the ContentType type */
export type MediaItemToContentTypeConnection = {
  __typename?: 'MediaItemToContentTypeConnection'
  /**
   * The nodes of the connection, without the edges
   * @deprecated
   */
  node?: Maybe<ContentType>
}

/** An Post Type object */
export type ContentType = Node & {
  __typename?: 'ContentType'
  /**
   * Whether this content type should can be exported.
   * @deprecated
   */
  canExport?: Maybe<Scalars['Boolean']>
  /**
   * List of Taxonomies connected to the Post Type
   * @deprecated
   */
  connectedTaxonomies?: Maybe<Array<Maybe<Taxonomy>>>
  /**
   * A list of Taxonomies associated with the post type
   * @deprecated
   */
  connectedTaxonomyNames?: Maybe<Array<Maybe<Scalars['String']>>>
  /**
   * Whether delete this type of content when the author of it is deleted from the system.
   * @deprecated
   */
  deleteWithUser?: Maybe<Scalars['Boolean']>
  /**
   * Description of the content type.
   * @deprecated
   */
  description?: Maybe<Scalars['String']>
  /**
   * Whether to exclude posts with this post type from front end search results.
   * @deprecated
   */
  excludeFromSearch?: Maybe<Scalars['Boolean']>
  /**
   * The plural name of the post type within the GraphQL Schema.
   * @deprecated
   */
  graphqlPluralName?: Maybe<Scalars['String']>
  /**
   * The singular name of the post type within the GraphQL Schema.
   * @deprecated
   */
  graphqlSingleName?: Maybe<Scalars['String']>
  /**
   * Whether this content type should have archives. Content archives are generated by type and by date.
   * @deprecated
   */
  hasArchive?: Maybe<Scalars['Boolean']>
  /**
   * Whether the post type is hierarchical, for example pages.
   * @deprecated
   */
  hierarchical?: Maybe<Scalars['Boolean']>
  /**
   * The globally unique identifier of the post-type object.
   * @deprecated
   */
  id: Scalars['ID']
  /**
   * Whether the object is restricted from the current viewer
   * @deprecated
   */
  isRestricted?: Maybe<Scalars['Boolean']>
  /**
   * Display name of the content type.
   * @deprecated
   */
  label?: Maybe<Scalars['String']>
  /**
   * Details about the post type labels.
   * @deprecated
   */
  labels?: Maybe<PostTypeLabelDetails>
  /**
   * The name of the icon file to display as a menu icon.
   * @deprecated
   */
  menuIcon?: Maybe<Scalars['String']>
  /**
   * The position of this post type in the menu. Only applies if show_in_menu is true.
   * @deprecated
   */
  menuPosition?: Maybe<Scalars['Int']>
  /**
   * The internal name of the post type. This should not be used for display purposes.
   * @deprecated
   */
  name?: Maybe<Scalars['String']>
  /**
   * Whether a post type is intended for use publicly either via the admin interface or by front-end users. While the default settings of exclude_from_search, publicly_queryable, show_ui, and show_in_nav_menus are inherited from public, each does not rely on this relationship and controls a very specific intention.
   * @deprecated
   */
  public?: Maybe<Scalars['Boolean']>
  /**
   * Whether queries can be performed on the front end for the post type as part of parse_request().
   * @deprecated
   */
  publiclyQueryable?: Maybe<Scalars['Boolean']>
  /**
   * Name of content type to diplay in REST API &quot;wp/v2&quot; namespace.
   * @deprecated
   */
  restBase?: Maybe<Scalars['String']>
  /**
   * The REST Controller class assigned to handling this content type.
   * @deprecated
   */
  restControllerClass?: Maybe<Scalars['String']>
  /**
   * Makes this post type available via the admin bar.
   * @deprecated
   */
  showInAdminBar?: Maybe<Scalars['Boolean']>
  /**
   * Whether to add the post type to the GraphQL Schema.
   * @deprecated
   */
  showInGraphql?: Maybe<Scalars['Boolean']>
  /**
   * Where to show the post type in the admin menu. To work, $show_ui must be true. If true, the post type is shown in its own top level menu. If false, no menu is shown. If a string of an existing top level menu (eg. &quot;tools.php&quot; or &quot;edit.php?post_type=page&quot;), the post type will be placed as a sub-menu of that.
   * @deprecated
   */
  showInMenu?: Maybe<Scalars['Boolean']>
  /**
   * Makes this post type available for selection in navigation menus.
   * @deprecated
   */
  showInNavMenus?: Maybe<Scalars['Boolean']>
  /**
   * Whether to add the post type route in the REST API &quot;wp/v2&quot; namespace.
   * @deprecated
   */
  showInRest?: Maybe<Scalars['Boolean']>
  /**
   * Whether to generate and allow a UI for managing this post type in the admin.
   * @deprecated
   */
  showUi?: Maybe<Scalars['Boolean']>
}

/** An Post Type object */
export type ContentTypeConnectedTaxonomiesArgs = {
  taxonomies?: Maybe<Array<Maybe<TaxonomyEnum>>>
}

/** An Post Type object */
export type ContentTypeConnectedTaxonomyNamesArgs = {
  taxonomies?: Maybe<Array<Maybe<TaxonomyEnum>>>
}

/** Allowed taxonomies */
export enum TaxonomyEnum {
  Category = 'CATEGORY',
  Postformat = 'POSTFORMAT',
  Tag = 'TAG',
}

/** A taxonomy object */
export type Taxonomy = Node & {
  __typename?: 'Taxonomy'
  /**
   * A list of Post Types associated with the taxonomy
   * @deprecated
   */
  connectedPostTypeNames?: Maybe<Array<Maybe<Scalars['String']>>>
  /**
   * List of Post Types connected to the Taxonomy
   * @deprecated
   */
  connectedPostTypes?: Maybe<Array<Maybe<ContentType>>>
  /**
   * Description of the taxonomy. This field is equivalent to WP_Taxonomy-&gt;description
   * @deprecated
   */
  description?: Maybe<Scalars['String']>
  /**
   * The plural name of the post type within the GraphQL Schema.
   * @deprecated
   */
  graphqlPluralName?: Maybe<Scalars['String']>
  /**
   * The singular name of the post type within the GraphQL Schema.
   * @deprecated
   */
  graphqlSingleName?: Maybe<Scalars['String']>
  /**
   * Whether the taxonomy is hierarchical
   * @deprecated
   */
  hierarchical?: Maybe<Scalars['Boolean']>
  /**
   * The globally unique identifier of the taxonomy object.
   * @deprecated
   */
  id: Scalars['ID']
  /**
   * Whether the object is restricted from the current viewer
   * @deprecated
   */
  isRestricted?: Maybe<Scalars['Boolean']>
  /**
   * Name of the taxonomy shown in the menu. Usually plural.
   * @deprecated
   */
  label?: Maybe<Scalars['String']>
  /**
   * The display name of the taxonomy. This field is equivalent to WP_Taxonomy-&gt;label
   * @deprecated
   */
  name?: Maybe<Scalars['String']>
  /**
   * Whether the taxonomy is publicly queryable
   * @deprecated
   */
  public?: Maybe<Scalars['Boolean']>
  /**
   * Name of content type to diplay in REST API &quot;wp/v2&quot; namespace.
   * @deprecated
   */
  restBase?: Maybe<Scalars['String']>
  /**
   * The REST Controller class assigned to handling this content type.
   * @deprecated
   */
  restControllerClass?: Maybe<Scalars['String']>
  /**
   * Whether to show the taxonomy as part of a tag cloud widget. This field is equivalent to WP_Taxonomy-&gt;show_tagcloud
   * @deprecated
   */
  showCloud?: Maybe<Scalars['Boolean']>
  /**
   * Whether to display a column for the taxonomy on its post type listing screens.
   * @deprecated
   */
  showInAdminColumn?: Maybe<Scalars['Boolean']>
  /**
   * Whether to add the post type to the GraphQL Schema.
   * @deprecated
   */
  showInGraphql?: Maybe<Scalars['Boolean']>
  /**
   * Whether to show the taxonomy in the admin menu
   * @deprecated
   */
  showInMenu?: Maybe<Scalars['Boolean']>
  /**
   * Whether the taxonomy is available for selection in navigation menus.
   * @deprecated
   */
  showInNavMenus?: Maybe<Scalars['Boolean']>
  /**
   * Whether to show the taxonomy in the quick/bulk edit panel.
   * @deprecated
   */
  showInQuickEdit?: Maybe<Scalars['Boolean']>
  /**
   * Whether to add the post type route in the REST API &quot;wp/v2&quot; namespace.
   * @deprecated
   */
  showInRest?: Maybe<Scalars['Boolean']>
  /**
   * Whether to generate and allow a UI for managing terms in this taxonomy in the admin
   * @deprecated
   */
  showUi?: Maybe<Scalars['Boolean']>
}

/** A taxonomy object */
export type TaxonomyConnectedPostTypeNamesArgs = {
  types?: Maybe<Array<Maybe<ContentTypeEnum>>>
}

/** A taxonomy object */
export type TaxonomyConnectedPostTypesArgs = {
  types?: Maybe<Array<Maybe<ContentTypeEnum>>>
}

/** Details for labels of the PostType */
export type PostTypeLabelDetails = {
  __typename?: 'PostTypeLabelDetails'
  /**
   * Default is ‘Add New’ for both hierarchical and non-hierarchical types.
   * @deprecated
   */
  addNew?: Maybe<Scalars['String']>
  /**
   * Label for adding a new singular item.
   * @deprecated
   */
  addNewItem?: Maybe<Scalars['String']>
  /**
   * Label to signify all items in a submenu link.
   * @deprecated
   */
  allItems?: Maybe<Scalars['String']>
  /**
   * Label for archives in nav menus
   * @deprecated
   */
  archives?: Maybe<Scalars['String']>
  /**
   * Label for the attributes meta box.
   * @deprecated
   */
  attributes?: Maybe<Scalars['String']>
  /**
   * Label for editing a singular item.
   * @deprecated
   */
  editItem?: Maybe<Scalars['String']>
  /**
   * Label for the Featured Image meta box title.
   * @deprecated
   */
  featuredImage?: Maybe<Scalars['String']>
  /**
   * Label for the table views hidden heading.
   * @deprecated
   */
  filterItemsList?: Maybe<Scalars['String']>
  /**
   * Label for the media frame button.
   * @deprecated
   */
  insertIntoItem?: Maybe<Scalars['String']>
  /**
   * Label for the table hidden heading.
   * @deprecated
   */
  itemsList?: Maybe<Scalars['String']>
  /**
   * Label for the table pagination hidden heading.
   * @deprecated
   */
  itemsListNavigation?: Maybe<Scalars['String']>
  /**
   * Label for the menu name.
   * @deprecated
   */
  menuName?: Maybe<Scalars['String']>
  /**
   * General name for the post type, usually plural.
   * @deprecated
   */
  name?: Maybe<Scalars['String']>
  /**
   * Label for the new item page title.
   * @deprecated
   */
  newItem?: Maybe<Scalars['String']>
  /**
   * Label used when no items are found.
   * @deprecated
   */
  notFound?: Maybe<Scalars['String']>
  /**
   * Label used when no items are in the trash.
   * @deprecated
   */
  notFoundInTrash?: Maybe<Scalars['String']>
  /**
   * Label used to prefix parents of hierarchical items.
   * @deprecated
   */
  parentItemColon?: Maybe<Scalars['String']>
  /**
   * Label for removing the featured image.
   * @deprecated
   */
  removeFeaturedImage?: Maybe<Scalars['String']>
  /**
   * Label for searching plural items.
   * @deprecated
   */
  searchItems?: Maybe<Scalars['String']>
  /**
   * Label for setting the featured image.
   * @deprecated
   */
  setFeaturedImage?: Maybe<Scalars['String']>
  /**
   * Name for one object of this post type.
   * @deprecated
   */
  singularName?: Maybe<Scalars['String']>
  /**
   * Label for the media frame filter.
   * @deprecated
   */
  uploadedToThisItem?: Maybe<Scalars['String']>
  /**
   * Label in the media frame for using a featured image.
   * @deprecated
   */
  useFeaturedImage?: Maybe<Scalars['String']>
  /**
   * Label for viewing a singular item.
   * @deprecated
   */
  viewItem?: Maybe<Scalars['String']>
  /**
   * Label for viewing post type archives.
   * @deprecated
   */
  viewItems?: Maybe<Scalars['String']>
}

/** Info on whether the object is locked by another user editing it */
export type EditLock = {
  __typename?: 'EditLock'
  /**
   * The time when the object was last edited
   * @deprecated
   */
  editTime?: Maybe<Scalars['String']>
  /**
   * The user that most recently edited the object
   * @deprecated
   */
  user?: Maybe<User>
}

/** File details for a Media Item */
export type MediaDetails = {
  __typename?: 'MediaDetails'
  /**
   * The height of the mediaItem
   * @deprecated
   */
  file?: Maybe<Scalars['String']>
  /**
   * The height of the mediaItem
   * @deprecated
   */
  height?: Maybe<Scalars['Int']>
  /** @deprecated  */
  meta?: Maybe<MediaItemMeta>
  /**
   * The available sizes of the mediaItem
   * @deprecated
   */
  sizes?: Maybe<Array<Maybe<MediaSize>>>
  /**
   * The width of the mediaItem
   * @deprecated
   */
  width?: Maybe<Scalars['Int']>
}

/** Meta connected to a MediaItem */
export type MediaItemMeta = {
  __typename?: 'MediaItemMeta'
  /** @deprecated  */
  aperture?: Maybe<Scalars['Float']>
  /** @deprecated  */
  camera?: Maybe<Scalars['String']>
  /** @deprecated  */
  caption?: Maybe<Scalars['String']>
  /** @deprecated  */
  copyright?: Maybe<Scalars['String']>
  /** @deprecated  */
  createdTimestamp?: Maybe<Scalars['Int']>
  /** @deprecated  */
  credit?: Maybe<Scalars['String']>
  /** @deprecated  */
  focalLength?: Maybe<Scalars['Int']>
  /** @deprecated  */
  iso?: Maybe<Scalars['Int']>
  /** @deprecated  */
  keywords?: Maybe<Array<Maybe<Scalars['String']>>>
  /** @deprecated  */
  orientation?: Maybe<Scalars['String']>
  /** @deprecated  */
  shutterSpeed?: Maybe<Scalars['Float']>
  /** @deprecated  */
  title?: Maybe<Scalars['String']>
}

/** Details of an available size for a media item */
export type MediaSize = {
  __typename?: 'MediaSize'
  /**
   * The file of the for the referenced size
   * @deprecated
   */
  file?: Maybe<Scalars['String']>
  /**
   * The height of the for the referenced size
   * @deprecated
   */
  height?: Maybe<Scalars['String']>
  /**
   * The mime type of the resource
   * @deprecated
   */
  mimeType?: Maybe<Scalars['String']>
  /**
   * The referenced size name
   * @deprecated
   */
  name?: Maybe<Scalars['String']>
  /**
   * The url of the for the referenced size
   * @deprecated
   */
  sourceUrl?: Maybe<Scalars['String']>
  /**
   * The width of the for the referenced size
   * @deprecated
   */
  width?: Maybe<Scalars['String']>
}

/** The size of the media item object. */
export enum MediaItemSizeEnum {
  /** MediaItem with the large size */
  Large = 'LARGE',
  /** MediaItem with the medium size */
  Medium = 'MEDIUM',
  /** MediaItem with the medium_large size */
  MediumLarge = 'MEDIUM_LARGE',
  /** MediaItem with the post-thumbnail size */
  PostThumbnail = 'POST_THUMBNAIL',
  /** MediaItem with the thumbnail size */
  Thumbnail = 'THUMBNAIL',
  /** MediaItem with the twentytwenty-fullscreen size */
  TwentytwentyFullscreen = 'TWENTYTWENTY_FULLSCREEN',
  /** MediaItem with the 1536x1536 size */
  '1536X1536' = '_1536X1536',
  /** MediaItem with the 2048x2048 size */
  '2048X2048' = '_2048X2048',
}

export type ContentTemplateUnion =
  | DefaultTemplate
  | CoverTemplateTemplate
  | FullWidthTemplateTemplate

/** The template assigned to the node */
export type DefaultTemplate = ContentTemplate & {
  __typename?: 'DefaultTemplate'
  /**
   * The name of the template
   * @deprecated
   */
  templateName?: Maybe<Scalars['String']>
}

/** The template assigned to a node of content */
export type ContentTemplate = {
  /** The name of the template */
  templateName?: Maybe<Scalars['String']>
}

/** The template assigned to the node */
export type CoverTemplateTemplate = ContentTemplate & {
  __typename?: 'CoverTemplateTemplate'
  /**
   * The name of the template
   * @deprecated
   */
  templateName?: Maybe<Scalars['String']>
}

/** The template assigned to the node */
export type FullWidthTemplateTemplate = ContentTemplate & {
  __typename?: 'FullWidthTemplateTemplate'
  /**
   * The name of the template
   * @deprecated
   */
  templateName?: Maybe<Scalars['String']>
}

export type TermObjectUnion = Category | Tag | PostFormat

/** The tag type */
export type Tag = Node &
  TermNode &
  UniformResourceIdentifiable & {
    __typename?: 'Tag'
    /**
     * The number of objects connected to the object
     * @deprecated
     */
    count?: Maybe<Scalars['Int']>
    /**
     * Identifies the primary key from the database.
     * @deprecated
     */
    databaseId: Scalars['Int']
    /**
     * The description of the object
     * @deprecated
     */
    description?: Maybe<Scalars['String']>
    /**
     * The globally unique ID for the object
     * @deprecated
     */
    id: Scalars['ID']
    /**
     * Whether the object is restricted from the current viewer
     * @deprecated
     */
    isRestricted?: Maybe<Scalars['Boolean']>
    /**
     * The link to the term
     * @deprecated
     */
    link?: Maybe<Scalars['String']>
    /**
     * The human friendly name of the object.
     * @deprecated
     */
    name?: Maybe<Scalars['String']>
    /**
     * Connection between the tag type and the post type
     * @deprecated
     */
    posts?: Maybe<TagToPostConnection>
    /**
     * An alphanumeric identifier for the object unique to its type.
     * @deprecated
     */
    slug?: Maybe<Scalars['String']>
    /**
     * The id field matches the WP_Post-&gt;ID field.
     * @deprecated Deprecated in favor of databaseId
     */
    tagId?: Maybe<Scalars['Int']>
    /**
     * Connection between the tag type and the Taxonomy type
     * @deprecated
     */
    taxonomy?: Maybe<TagToTaxonomyConnection>
    /**
     * The ID of the term group that this term object belongs to
     * @deprecated
     */
    termGroupId?: Maybe<Scalars['Int']>
    /**
     * The taxonomy ID that the object is associated with
     * @deprecated
     */
    termTaxonomyId?: Maybe<Scalars['Int']>
    /**
     * The unique resource identifier path
     * @deprecated
     */
    uri: Scalars['String']
  }

/** The tag type */
export type TagPostsArgs = {
  first?: Maybe<Scalars['Int']>
  last?: Maybe<Scalars['Int']>
  after?: Maybe<Scalars['String']>
  before?: Maybe<Scalars['String']>
  where?: Maybe<TagToPostConnectionWhereArgs>
}

/** Arguments for filtering the TagToPostConnection connection */
export type TagToPostConnectionWhereArgs = {
  /** The user that's connected as the author of the object. Use the userId for the author object. */
  author?: Maybe<Scalars['Int']>
  /** Find objects connected to author(s) in the array of author's userIds */
  authorIn?: Maybe<Array<Maybe<Scalars['ID']>>>
  /** Find objects connected to the author by the author's nicename */
  authorName?: Maybe<Scalars['String']>
  /** Find objects NOT connected to author(s) in the array of author's userIds */
  authorNotIn?: Maybe<Array<Maybe<Scalars['ID']>>>
  /** Category ID */
  categoryId?: Maybe<Scalars['Int']>
  /** Array of category IDs, used to display objects from one category OR another */
  categoryIn?: Maybe<Array<Maybe<Scalars['ID']>>>
  /** Use Category Slug */
  categoryName?: Maybe<Scalars['String']>
  /** Array of category IDs, used to display objects from one category OR another */
  categoryNotIn?: Maybe<Array<Maybe<Scalars['ID']>>>
  /** Filter the connection based on dates */
  dateQuery?: Maybe<DateQueryInput>
  /** True for objects with passwords; False for objects without passwords; null for all objects with or without passwords */
  hasPassword?: Maybe<Scalars['Boolean']>
  /** Specific ID of the object */
  id?: Maybe<Scalars['Int']>
  /** Array of IDs for the objects to retrieve */
  in?: Maybe<Array<Maybe<Scalars['ID']>>>
  /** Get objects with a specific mimeType property */
  mimeType?: Maybe<MimeTypeEnum>
  /** Slug / post_name of the object */
  name?: Maybe<Scalars['String']>
  /** Specify objects to retrieve. Use slugs */
  nameIn?: Maybe<Array<Maybe<Scalars['String']>>>
  /** Specify IDs NOT to retrieve. If this is used in the same query as "in", it will be ignored */
  notIn?: Maybe<Array<Maybe<Scalars['ID']>>>
  /** What paramater to use to order the objects by. */
  orderby?: Maybe<Array<Maybe<PostObjectsConnectionOrderbyInput>>>
  /** Use ID to return only children. Use 0 to return only top-level items */
  parent?: Maybe<Scalars['String']>
  /** Specify objects whose parent is in an array */
  parentIn?: Maybe<Array<Maybe<Scalars['ID']>>>
  /** Specify posts whose parent is not in an array */
  parentNotIn?: Maybe<Array<Maybe<Scalars['ID']>>>
  /** Show posts with a specific password. */
  password?: Maybe<Scalars['String']>
  /** Show Posts based on a keyword search */
  search?: Maybe<Scalars['String']>
  stati?: Maybe<Array<Maybe<PostStatusEnum>>>
  status?: Maybe<PostStatusEnum>
  /** Tag Slug */
  tag?: Maybe<Scalars['String']>
  /** Use Tag ID */
  tagId?: Maybe<Scalars['String']>
  /** Array of tag IDs, used to display objects from one tag OR another */
  tagIn?: Maybe<Array<Maybe<Scalars['ID']>>>
  /** Array of tag IDs, used to display objects from one tag OR another */
  tagNotIn?: Maybe<Array<Maybe<Scalars['ID']>>>
  /** Array of tag slugs, used to display objects from one tag OR another */
  tagSlugAnd?: Maybe<Array<Maybe<Scalars['String']>>>
  /** Array of tag slugs, used to exclude objects in specified tags */
  tagSlugIn?: Maybe<Array<Maybe<Scalars['String']>>>
  /** Title of the object */
  title?: Maybe<Scalars['String']>
}

/** Connection between the tag type and the post type */
export type TagToPostConnection = {
  __typename?: 'TagToPostConnection'
  /**
   * Edges for the TagToPostConnection connection
   * @deprecated
   */
  edges?: Maybe<Array<Maybe<TagToPostConnectionEdge>>>
  /**
   * The nodes of the connection, without the edges
   * @deprecated
   */
  nodes?: Maybe<Array<Maybe<Post>>>
  /**
   * Information about pagination in a connection.
   * @deprecated
   */
  pageInfo?: Maybe<WpPageInfo>
}

/** An edge in a connection */
export type TagToPostConnectionEdge = {
  __typename?: 'TagToPostConnectionEdge'
  /**
   * A cursor for use in pagination
   * @deprecated
   */
  cursor?: Maybe<Scalars['String']>
  /**
   * The item at the end of the edge
   * @deprecated
   */
  node?: Maybe<Post>
}

/** Connection between the tag type and the Taxonomy type */
export type TagToTaxonomyConnection = {
  __typename?: 'TagToTaxonomyConnection'
  /**
   * The nodes of the connection, without the edges
   * @deprecated
   */
  node?: Maybe<Taxonomy>
}

/** The postFormat type */
export type PostFormat = Node &
  TermNode &
  UniformResourceIdentifiable & {
    __typename?: 'PostFormat'
    /**
     * The number of objects connected to the object
     * @deprecated
     */
    count?: Maybe<Scalars['Int']>
    /**
     * Identifies the primary key from the database.
     * @deprecated
     */
    databaseId: Scalars['Int']
    /**
     * The description of the object
     * @deprecated
     */
    description?: Maybe<Scalars['String']>
    /**
     * The globally unique ID for the object
     * @deprecated
     */
    id: Scalars['ID']
    /**
     * Whether the object is restricted from the current viewer
     * @deprecated
     */
    isRestricted?: Maybe<Scalars['Boolean']>
    /**
     * The link to the term
     * @deprecated
     */
    link?: Maybe<Scalars['String']>
    /**
     * The human friendly name of the object.
     * @deprecated
     */
    name?: Maybe<Scalars['String']>
    /**
     * The id field matches the WP_Post-&gt;ID field.
     * @deprecated Deprecated in favor of databaseId
     */
    postFormatId?: Maybe<Scalars['Int']>
    /**
     * Connection between the postFormat type and the post type
     * @deprecated
     */
    posts?: Maybe<PostFormatToPostConnection>
    /**
     * An alphanumeric identifier for the object unique to its type.
     * @deprecated
     */
    slug?: Maybe<Scalars['String']>
    /**
     * Connection between the postFormat type and the Taxonomy type
     * @deprecated
     */
    taxonomy?: Maybe<PostFormatToTaxonomyConnection>
    /**
     * The ID of the term group that this term object belongs to
     * @deprecated
     */
    termGroupId?: Maybe<Scalars['Int']>
    /**
     * The taxonomy ID that the object is associated with
     * @deprecated
     */
    termTaxonomyId?: Maybe<Scalars['Int']>
    /**
     * The unique resource identifier path
     * @deprecated
     */
    uri: Scalars['String']
  }

/** The postFormat type */
export type PostFormatPostsArgs = {
  first?: Maybe<Scalars['Int']>
  last?: Maybe<Scalars['Int']>
  after?: Maybe<Scalars['String']>
  before?: Maybe<Scalars['String']>
  where?: Maybe<PostFormatToPostConnectionWhereArgs>
}

/** Arguments for filtering the PostFormatToPostConnection connection */
export type PostFormatToPostConnectionWhereArgs = {
  /** The user that's connected as the author of the object. Use the userId for the author object. */
  author?: Maybe<Scalars['Int']>
  /** Find objects connected to author(s) in the array of author's userIds */
  authorIn?: Maybe<Array<Maybe<Scalars['ID']>>>
  /** Find objects connected to the author by the author's nicename */
  authorName?: Maybe<Scalars['String']>
  /** Find objects NOT connected to author(s) in the array of author's userIds */
  authorNotIn?: Maybe<Array<Maybe<Scalars['ID']>>>
  /** Category ID */
  categoryId?: Maybe<Scalars['Int']>
  /** Array of category IDs, used to display objects from one category OR another */
  categoryIn?: Maybe<Array<Maybe<Scalars['ID']>>>
  /** Use Category Slug */
  categoryName?: Maybe<Scalars['String']>
  /** Array of category IDs, used to display objects from one category OR another */
  categoryNotIn?: Maybe<Array<Maybe<Scalars['ID']>>>
  /** Filter the connection based on dates */
  dateQuery?: Maybe<DateQueryInput>
  /** True for objects with passwords; False for objects without passwords; null for all objects with or without passwords */
  hasPassword?: Maybe<Scalars['Boolean']>
  /** Specific ID of the object */
  id?: Maybe<Scalars['Int']>
  /** Array of IDs for the objects to retrieve */
  in?: Maybe<Array<Maybe<Scalars['ID']>>>
  /** Get objects with a specific mimeType property */
  mimeType?: Maybe<MimeTypeEnum>
  /** Slug / post_name of the object */
  name?: Maybe<Scalars['String']>
  /** Specify objects to retrieve. Use slugs */
  nameIn?: Maybe<Array<Maybe<Scalars['String']>>>
  /** Specify IDs NOT to retrieve. If this is used in the same query as "in", it will be ignored */
  notIn?: Maybe<Array<Maybe<Scalars['ID']>>>
  /** What paramater to use to order the objects by. */
  orderby?: Maybe<Array<Maybe<PostObjectsConnectionOrderbyInput>>>
  /** Use ID to return only children. Use 0 to return only top-level items */
  parent?: Maybe<Scalars['String']>
  /** Specify objects whose parent is in an array */
  parentIn?: Maybe<Array<Maybe<Scalars['ID']>>>
  /** Specify posts whose parent is not in an array */
  parentNotIn?: Maybe<Array<Maybe<Scalars['ID']>>>
  /** Show posts with a specific password. */
  password?: Maybe<Scalars['String']>
  /** Show Posts based on a keyword search */
  search?: Maybe<Scalars['String']>
  stati?: Maybe<Array<Maybe<PostStatusEnum>>>
  status?: Maybe<PostStatusEnum>
  /** Tag Slug */
  tag?: Maybe<Scalars['String']>
  /** Use Tag ID */
  tagId?: Maybe<Scalars['String']>
  /** Array of tag IDs, used to display objects from one tag OR another */
  tagIn?: Maybe<Array<Maybe<Scalars['ID']>>>
  /** Array of tag IDs, used to display objects from one tag OR another */
  tagNotIn?: Maybe<Array<Maybe<Scalars['ID']>>>
  /** Array of tag slugs, used to display objects from one tag OR another */
  tagSlugAnd?: Maybe<Array<Maybe<Scalars['String']>>>
  /** Array of tag slugs, used to exclude objects in specified tags */
  tagSlugIn?: Maybe<Array<Maybe<Scalars['String']>>>
  /** Title of the object */
  title?: Maybe<Scalars['String']>
}

/** Connection between the postFormat type and the post type */
export type PostFormatToPostConnection = {
  __typename?: 'PostFormatToPostConnection'
  /**
   * Edges for the PostFormatToPostConnection connection
   * @deprecated
   */
  edges?: Maybe<Array<Maybe<PostFormatToPostConnectionEdge>>>
  /**
   * The nodes of the connection, without the edges
   * @deprecated
   */
  nodes?: Maybe<Array<Maybe<Post>>>
  /**
   * Information about pagination in a connection.
   * @deprecated
   */
  pageInfo?: Maybe<WpPageInfo>
}

/** An edge in a connection */
export type PostFormatToPostConnectionEdge = {
  __typename?: 'PostFormatToPostConnectionEdge'
  /**
   * A cursor for use in pagination
   * @deprecated
   */
  cursor?: Maybe<Scalars['String']>
  /**
   * The item at the end of the edge
   * @deprecated
   */
  node?: Maybe<Post>
}

/** Connection between the postFormat type and the Taxonomy type */
export type PostFormatToTaxonomyConnection = {
  __typename?: 'PostFormatToTaxonomyConnection'
  /**
   * The nodes of the connection, without the edges
   * @deprecated
   */
  node?: Maybe<Taxonomy>
}

/** A node that can have revisions */
export type NodeWithRevisions = {
  /** True if the node is a revision of another node */
  isRevision?: Maybe<Scalars['Boolean']>
  /** If the current node is a revision, this field exposes the node this is a revision of. Returns null if the node is not a revision of another node. */
  revisionOf?: Maybe<PostObjectUnion>
}

/** A node that can have page attributes */
export type NodeWithPageAttributes = {
  /** A field used for ordering posts. This is typically used with nav menu items or for special ordering of hierarchical content types. */
  menuOrder?: Maybe<Scalars['Int']>
}

/** Arguments for filtering the PageToPageConnection connection */
export type PageToPageConnectionWhereArgs = {
  /** The user that's connected as the author of the object. Use the userId for the author object. */
  author?: Maybe<Scalars['Int']>
  /** Find objects connected to author(s) in the array of author's userIds */
  authorIn?: Maybe<Array<Maybe<Scalars['ID']>>>
  /** Find objects connected to the author by the author's nicename */
  authorName?: Maybe<Scalars['String']>
  /** Find objects NOT connected to author(s) in the array of author's userIds */
  authorNotIn?: Maybe<Array<Maybe<Scalars['ID']>>>
  /** Filter the connection based on dates */
  dateQuery?: Maybe<DateQueryInput>
  /** True for objects with passwords; False for objects without passwords; null for all objects with or without passwords */
  hasPassword?: Maybe<Scalars['Boolean']>
  /** Specific ID of the object */
  id?: Maybe<Scalars['Int']>
  /** Array of IDs for the objects to retrieve */
  in?: Maybe<Array<Maybe<Scalars['ID']>>>
  /** Get objects with a specific mimeType property */
  mimeType?: Maybe<MimeTypeEnum>
  /** Slug / post_name of the object */
  name?: Maybe<Scalars['String']>
  /** Specify objects to retrieve. Use slugs */
  nameIn?: Maybe<Array<Maybe<Scalars['String']>>>
  /** Specify IDs NOT to retrieve. If this is used in the same query as "in", it will be ignored */
  notIn?: Maybe<Array<Maybe<Scalars['ID']>>>
  /** What paramater to use to order the objects by. */
  orderby?: Maybe<Array<Maybe<PostObjectsConnectionOrderbyInput>>>
  /** Use ID to return only children. Use 0 to return only top-level items */
  parent?: Maybe<Scalars['String']>
  /** Specify objects whose parent is in an array */
  parentIn?: Maybe<Array<Maybe<Scalars['ID']>>>
  /** Specify posts whose parent is not in an array */
  parentNotIn?: Maybe<Array<Maybe<Scalars['ID']>>>
  /** Show posts with a specific password. */
  password?: Maybe<Scalars['String']>
  /** Show Posts based on a keyword search */
  search?: Maybe<Scalars['String']>
  stati?: Maybe<Array<Maybe<PostStatusEnum>>>
  status?: Maybe<PostStatusEnum>
  /** Title of the object */
  title?: Maybe<Scalars['String']>
}

/** Connection between the page type and the page type */
export type PageToPageConnection = {
  __typename?: 'PageToPageConnection'
  /**
   * Edges for the PageToPageConnection connection
   * @deprecated
   */
  edges?: Maybe<Array<Maybe<PageToPageConnectionEdge>>>
  /**
   * The nodes of the connection, without the edges
   * @deprecated
   */
  nodes?: Maybe<Array<Maybe<Page>>>
  /**
   * Information about pagination in a connection.
   * @deprecated
   */
  pageInfo?: Maybe<WpPageInfo>
}

/** An edge in a connection */
export type PageToPageConnectionEdge = {
  __typename?: 'PageToPageConnectionEdge'
  /**
   * A cursor for use in pagination
   * @deprecated
   */
  cursor?: Maybe<Scalars['String']>
  /**
   * The item at the end of the edge
   * @deprecated
   */
  node?: Maybe<Page>
}

/** Arguments for filtering the PageToCommentConnection connection */
export type PageToCommentConnectionWhereArgs = {
  /** Comment author email address. */
  authorEmail?: Maybe<Scalars['String']>
  /** Array of author IDs to include comments for. */
  authorIn?: Maybe<Array<Maybe<Scalars['ID']>>>
  /** Array of author IDs to exclude comments for. */
  authorNotIn?: Maybe<Array<Maybe<Scalars['ID']>>>
  /** Comment author URL. */
  authorUrl?: Maybe<Scalars['String']>
  /** Array of comment IDs to include. */
  commentIn?: Maybe<Array<Maybe<Scalars['ID']>>>
  /**
   * Array of IDs of users whose unapproved comments will be returned by the
   * 							query regardless of status.
   */
  commentNotIn?: Maybe<Array<Maybe<Scalars['ID']>>>
  /** Include comments of a given type. */
  commentType?: Maybe<Scalars['String']>
  /** Include comments from a given array of comment types. */
  commentTypeIn?: Maybe<Array<Maybe<Scalars['String']>>>
  /** Exclude comments from a given array of comment types. */
  commentTypeNotIn?: Maybe<Scalars['String']>
  /** Content object author ID to limit results by. */
  contentAuthor?: Maybe<Array<Maybe<Scalars['ID']>>>
  /** Array of author IDs to retrieve comments for. */
  contentAuthorIn?: Maybe<Array<Maybe<Scalars['ID']>>>
  /** Array of author IDs *not* to retrieve comments for. */
  contentAuthorNotIn?: Maybe<Array<Maybe<Scalars['ID']>>>
  /**
   * Limit results to those affiliated with a given content object
   * 							ID.
   */
  contentId?: Maybe<Scalars['ID']>
  /**
   * Array of content object IDs to include affiliated comments
   * 							for.
   */
  contentIdIn?: Maybe<Array<Maybe<Scalars['ID']>>>
  /**
   * Array of content object IDs to exclude affiliated comments
   * 							for.
   */
  contentIdNotIn?: Maybe<Array<Maybe<Scalars['ID']>>>
  /** Content object name to retrieve affiliated comments for. */
  contentName?: Maybe<Scalars['String']>
  /** Content Object parent ID to retrieve affiliated comments for. */
  contentParent?: Maybe<Scalars['Int']>
  /**
   * Array of content object statuses to retrieve affiliated comments for.
   * 							Pass 'any' to match any value.
   */
  contentStatus?: Maybe<Array<Maybe<PostStatusEnum>>>
  /** Content object type or array of types to retrieve affiliated comments for. Pass 'any' to match any value. */
  contentType?: Maybe<Array<Maybe<ContentTypeEnum>>>
  /** Array of IDs or email addresses of users whose unapproved comments will be returned by the query regardless of $status. Default empty */
  includeUnapproved?: Maybe<Array<Maybe<Scalars['ID']>>>
  /** Karma score to retrieve matching comments for. */
  karma?: Maybe<Scalars['Int']>
  /** The cardinality of the order of the connection */
  order?: Maybe<OrderEnum>
  /** Field to order the comments by. */
  orderby?: Maybe<CommentsConnectionOrderbyEnum>
  /** Parent ID of comment to retrieve children of. */
  parent?: Maybe<Scalars['Int']>
  /** Array of parent IDs of comments to retrieve children for. */
  parentIn?: Maybe<Array<Maybe<Scalars['ID']>>>
  /**
   * Array of parent IDs of comments *not* to retrieve children
   * 							for.
   */
  parentNotIn?: Maybe<Array<Maybe<Scalars['ID']>>>
  /** Search term(s) to retrieve matching comments for. */
  search?: Maybe<Scalars['String']>
  /** Comment status to limit results by. */
  status?: Maybe<Scalars['String']>
  /** Include comments for a specific user ID. */
  userId?: Maybe<Scalars['ID']>
}

/** Connection between the page type and the Comment type */
export type PageToCommentConnection = {
  __typename?: 'PageToCommentConnection'
  /**
   * Edges for the PageToCommentConnection connection
   * @deprecated
   */
  edges?: Maybe<Array<Maybe<PageToCommentConnectionEdge>>>
  /**
   * The nodes of the connection, without the edges
   * @deprecated
   */
  nodes?: Maybe<Array<Maybe<Comment>>>
  /**
   * Information about pagination in a connection.
   * @deprecated
   */
  pageInfo?: Maybe<WpPageInfo>
}

/** An edge in a connection */
export type PageToCommentConnectionEdge = {
  __typename?: 'PageToCommentConnectionEdge'
  /**
   * A cursor for use in pagination
   * @deprecated
   */
  cursor?: Maybe<Scalars['String']>
  /**
   * The item at the end of the edge
   * @deprecated
   */
  node?: Maybe<Comment>
}

/** Connection between the page type and the ContentType type */
export type PageToContentTypeConnection = {
  __typename?: 'PageToContentTypeConnection'
  /**
   * The nodes of the connection, without the edges
   * @deprecated
   */
  node?: Maybe<ContentType>
}

/** Arguments for filtering the pageToRevisionConnection connection */
export type PageToRevisionConnectionWhereArgs = {
  /** The user that's connected as the author of the object. Use the userId for the author object. */
  author?: Maybe<Scalars['Int']>
  /** Find objects connected to author(s) in the array of author's userIds */
  authorIn?: Maybe<Array<Maybe<Scalars['ID']>>>
  /** Find objects connected to the author by the author's nicename */
  authorName?: Maybe<Scalars['String']>
  /** Find objects NOT connected to author(s) in the array of author's userIds */
  authorNotIn?: Maybe<Array<Maybe<Scalars['ID']>>>
  /** Filter the connection based on dates */
  dateQuery?: Maybe<DateQueryInput>
  /** True for objects with passwords; False for objects without passwords; null for all objects with or without passwords */
  hasPassword?: Maybe<Scalars['Boolean']>
  /** Specific ID of the object */
  id?: Maybe<Scalars['Int']>
  /** Array of IDs for the objects to retrieve */
  in?: Maybe<Array<Maybe<Scalars['ID']>>>
  /** Get objects with a specific mimeType property */
  mimeType?: Maybe<MimeTypeEnum>
  /** Slug / post_name of the object */
  name?: Maybe<Scalars['String']>
  /** Specify objects to retrieve. Use slugs */
  nameIn?: Maybe<Array<Maybe<Scalars['String']>>>
  /** Specify IDs NOT to retrieve. If this is used in the same query as "in", it will be ignored */
  notIn?: Maybe<Array<Maybe<Scalars['ID']>>>
  /** What paramater to use to order the objects by. */
  orderby?: Maybe<Array<Maybe<PostObjectsConnectionOrderbyInput>>>
  /** Use ID to return only children. Use 0 to return only top-level items */
  parent?: Maybe<Scalars['String']>
  /** Specify objects whose parent is in an array */
  parentIn?: Maybe<Array<Maybe<Scalars['ID']>>>
  /** Specify posts whose parent is not in an array */
  parentNotIn?: Maybe<Array<Maybe<Scalars['ID']>>>
  /** Show posts with a specific password. */
  password?: Maybe<Scalars['String']>
  /** Show Posts based on a keyword search */
  search?: Maybe<Scalars['String']>
  stati?: Maybe<Array<Maybe<PostStatusEnum>>>
  status?: Maybe<PostStatusEnum>
  /** Title of the object */
  title?: Maybe<Scalars['String']>
}

/** Connection between the page type and the page type */
export type PageToRevisionConnection = {
  __typename?: 'PageToRevisionConnection'
  /**
   * Edges for the pageToRevisionConnection connection
   * @deprecated
   */
  edges?: Maybe<Array<Maybe<PageToRevisionConnectionEdge>>>
  /**
   * The nodes of the connection, without the edges
   * @deprecated
   */
  nodes?: Maybe<Array<Maybe<Page>>>
  /**
   * Information about pagination in a connection.
   * @deprecated
   */
  pageInfo?: Maybe<WpPageInfo>
}

/** An edge in a connection */
export type PageToRevisionConnectionEdge = {
  __typename?: 'PageToRevisionConnectionEdge'
  /**
   * A cursor for use in pagination
   * @deprecated
   */
  cursor?: Maybe<Scalars['String']>
  /**
   * The item at the end of the edge
   * @deprecated
   */
  node?: Maybe<Page>
}

/** Field Group */
export type Page_Showmenu = {
  __typename?: 'Page_Showmenu'
  /** @deprecated  */
  fieldGroupName?: Maybe<Scalars['String']>
  /** @deprecated  */
  showfooter?: Maybe<Scalars['Boolean']>
  /** @deprecated  */
  showheader?: Maybe<Scalars['Boolean']>
}

/** Field Group */
export type Comment_Likes = {
  __typename?: 'Comment_Likes'
  /** @deprecated  */
  fieldGroupName?: Maybe<Scalars['String']>
  /** @deprecated  */
  likes?: Maybe<Scalars['Float']>
}

/** Arguments for filtering the UserToMediaItemConnection connection */
export type UserToMediaItemConnectionWhereArgs = {
  /** The user that's connected as the author of the object. Use the userId for the author object. */
  author?: Maybe<Scalars['Int']>
  /** Find objects connected to author(s) in the array of author's userIds */
  authorIn?: Maybe<Array<Maybe<Scalars['ID']>>>
  /** Find objects connected to the author by the author's nicename */
  authorName?: Maybe<Scalars['String']>
  /** Find objects NOT connected to author(s) in the array of author's userIds */
  authorNotIn?: Maybe<Array<Maybe<Scalars['ID']>>>
  /** Filter the connection based on dates */
  dateQuery?: Maybe<DateQueryInput>
  /** True for objects with passwords; False for objects without passwords; null for all objects with or without passwords */
  hasPassword?: Maybe<Scalars['Boolean']>
  /** Specific ID of the object */
  id?: Maybe<Scalars['Int']>
  /** Array of IDs for the objects to retrieve */
  in?: Maybe<Array<Maybe<Scalars['ID']>>>
  /** Get objects with a specific mimeType property */
  mimeType?: Maybe<MimeTypeEnum>
  /** Slug / post_name of the object */
  name?: Maybe<Scalars['String']>
  /** Specify objects to retrieve. Use slugs */
  nameIn?: Maybe<Array<Maybe<Scalars['String']>>>
  /** Specify IDs NOT to retrieve. If this is used in the same query as "in", it will be ignored */
  notIn?: Maybe<Array<Maybe<Scalars['ID']>>>
  /** What paramater to use to order the objects by. */
  orderby?: Maybe<Array<Maybe<PostObjectsConnectionOrderbyInput>>>
  /** Use ID to return only children. Use 0 to return only top-level items */
  parent?: Maybe<Scalars['String']>
  /** Specify objects whose parent is in an array */
  parentIn?: Maybe<Array<Maybe<Scalars['ID']>>>
  /** Specify posts whose parent is not in an array */
  parentNotIn?: Maybe<Array<Maybe<Scalars['ID']>>>
  /** Show posts with a specific password. */
  password?: Maybe<Scalars['String']>
  /** Show Posts based on a keyword search */
  search?: Maybe<Scalars['String']>
  stati?: Maybe<Array<Maybe<PostStatusEnum>>>
  status?: Maybe<PostStatusEnum>
  /** Title of the object */
  title?: Maybe<Scalars['String']>
}

/** Connection between the User type and the mediaItem type */
export type UserToMediaItemConnection = {
  __typename?: 'UserToMediaItemConnection'
  /**
   * Edges for the UserToMediaItemConnection connection
   * @deprecated
   */
  edges?: Maybe<Array<Maybe<UserToMediaItemConnectionEdge>>>
  /**
   * The nodes of the connection, without the edges
   * @deprecated
   */
  nodes?: Maybe<Array<Maybe<MediaItem>>>
  /**
   * Information about pagination in a connection.
   * @deprecated
   */
  pageInfo?: Maybe<WpPageInfo>
}

/** An edge in a connection */
export type UserToMediaItemConnectionEdge = {
  __typename?: 'UserToMediaItemConnectionEdge'
  /**
   * A cursor for use in pagination
   * @deprecated
   */
  cursor?: Maybe<Scalars['String']>
  /**
   * The item at the end of the edge
   * @deprecated
   */
  node?: Maybe<MediaItem>
}

/** Arguments for filtering the UserToPageConnection connection */
export type UserToPageConnectionWhereArgs = {
  /** The user that's connected as the author of the object. Use the userId for the author object. */
  author?: Maybe<Scalars['Int']>
  /** Find objects connected to author(s) in the array of author's userIds */
  authorIn?: Maybe<Array<Maybe<Scalars['ID']>>>
  /** Find objects connected to the author by the author's nicename */
  authorName?: Maybe<Scalars['String']>
  /** Find objects NOT connected to author(s) in the array of author's userIds */
  authorNotIn?: Maybe<Array<Maybe<Scalars['ID']>>>
  /** Filter the connection based on dates */
  dateQuery?: Maybe<DateQueryInput>
  /** True for objects with passwords; False for objects without passwords; null for all objects with or without passwords */
  hasPassword?: Maybe<Scalars['Boolean']>
  /** Specific ID of the object */
  id?: Maybe<Scalars['Int']>
  /** Array of IDs for the objects to retrieve */
  in?: Maybe<Array<Maybe<Scalars['ID']>>>
  /** Get objects with a specific mimeType property */
  mimeType?: Maybe<MimeTypeEnum>
  /** Slug / post_name of the object */
  name?: Maybe<Scalars['String']>
  /** Specify objects to retrieve. Use slugs */
  nameIn?: Maybe<Array<Maybe<Scalars['String']>>>
  /** Specify IDs NOT to retrieve. If this is used in the same query as "in", it will be ignored */
  notIn?: Maybe<Array<Maybe<Scalars['ID']>>>
  /** What paramater to use to order the objects by. */
  orderby?: Maybe<Array<Maybe<PostObjectsConnectionOrderbyInput>>>
  /** Use ID to return only children. Use 0 to return only top-level items */
  parent?: Maybe<Scalars['String']>
  /** Specify objects whose parent is in an array */
  parentIn?: Maybe<Array<Maybe<Scalars['ID']>>>
  /** Specify posts whose parent is not in an array */
  parentNotIn?: Maybe<Array<Maybe<Scalars['ID']>>>
  /** Show posts with a specific password. */
  password?: Maybe<Scalars['String']>
  /** Show Posts based on a keyword search */
  search?: Maybe<Scalars['String']>
  stati?: Maybe<Array<Maybe<PostStatusEnum>>>
  status?: Maybe<PostStatusEnum>
  /** Title of the object */
  title?: Maybe<Scalars['String']>
}

/** Connection between the User type and the page type */
export type UserToPageConnection = {
  __typename?: 'UserToPageConnection'
  /**
   * Edges for the UserToPageConnection connection
   * @deprecated
   */
  edges?: Maybe<Array<Maybe<UserToPageConnectionEdge>>>
  /**
   * The nodes of the connection, without the edges
   * @deprecated
   */
  nodes?: Maybe<Array<Maybe<Page>>>
  /**
   * Information about pagination in a connection.
   * @deprecated
   */
  pageInfo?: Maybe<WpPageInfo>
}

/** An edge in a connection */
export type UserToPageConnectionEdge = {
  __typename?: 'UserToPageConnectionEdge'
  /**
   * A cursor for use in pagination
   * @deprecated
   */
  cursor?: Maybe<Scalars['String']>
  /**
   * The item at the end of the edge
   * @deprecated
   */
  node?: Maybe<Page>
}

/** Arguments for filtering the UserToPostConnection connection */
export type UserToPostConnectionWhereArgs = {
  /** The user that's connected as the author of the object. Use the userId for the author object. */
  author?: Maybe<Scalars['Int']>
  /** Find objects connected to author(s) in the array of author's userIds */
  authorIn?: Maybe<Array<Maybe<Scalars['ID']>>>
  /** Find objects connected to the author by the author's nicename */
  authorName?: Maybe<Scalars['String']>
  /** Find objects NOT connected to author(s) in the array of author's userIds */
  authorNotIn?: Maybe<Array<Maybe<Scalars['ID']>>>
  /** Category ID */
  categoryId?: Maybe<Scalars['Int']>
  /** Array of category IDs, used to display objects from one category OR another */
  categoryIn?: Maybe<Array<Maybe<Scalars['ID']>>>
  /** Use Category Slug */
  categoryName?: Maybe<Scalars['String']>
  /** Array of category IDs, used to display objects from one category OR another */
  categoryNotIn?: Maybe<Array<Maybe<Scalars['ID']>>>
  /** Filter the connection based on dates */
  dateQuery?: Maybe<DateQueryInput>
  /** True for objects with passwords; False for objects without passwords; null for all objects with or without passwords */
  hasPassword?: Maybe<Scalars['Boolean']>
  /** Specific ID of the object */
  id?: Maybe<Scalars['Int']>
  /** Array of IDs for the objects to retrieve */
  in?: Maybe<Array<Maybe<Scalars['ID']>>>
  /** Get objects with a specific mimeType property */
  mimeType?: Maybe<MimeTypeEnum>
  /** Slug / post_name of the object */
  name?: Maybe<Scalars['String']>
  /** Specify objects to retrieve. Use slugs */
  nameIn?: Maybe<Array<Maybe<Scalars['String']>>>
  /** Specify IDs NOT to retrieve. If this is used in the same query as "in", it will be ignored */
  notIn?: Maybe<Array<Maybe<Scalars['ID']>>>
  /** What paramater to use to order the objects by. */
  orderby?: Maybe<Array<Maybe<PostObjectsConnectionOrderbyInput>>>
  /** Use ID to return only children. Use 0 to return only top-level items */
  parent?: Maybe<Scalars['String']>
  /** Specify objects whose parent is in an array */
  parentIn?: Maybe<Array<Maybe<Scalars['ID']>>>
  /** Specify posts whose parent is not in an array */
  parentNotIn?: Maybe<Array<Maybe<Scalars['ID']>>>
  /** Show posts with a specific password. */
  password?: Maybe<Scalars['String']>
  /** Show Posts based on a keyword search */
  search?: Maybe<Scalars['String']>
  stati?: Maybe<Array<Maybe<PostStatusEnum>>>
  status?: Maybe<PostStatusEnum>
  /** Tag Slug */
  tag?: Maybe<Scalars['String']>
  /** Use Tag ID */
  tagId?: Maybe<Scalars['String']>
  /** Array of tag IDs, used to display objects from one tag OR another */
  tagIn?: Maybe<Array<Maybe<Scalars['ID']>>>
  /** Array of tag IDs, used to display objects from one tag OR another */
  tagNotIn?: Maybe<Array<Maybe<Scalars['ID']>>>
  /** Array of tag slugs, used to display objects from one tag OR another */
  tagSlugAnd?: Maybe<Array<Maybe<Scalars['String']>>>
  /** Array of tag slugs, used to exclude objects in specified tags */
  tagSlugIn?: Maybe<Array<Maybe<Scalars['String']>>>
  /** Title of the object */
  title?: Maybe<Scalars['String']>
}

/** Connection between the User type and the post type */
export type UserToPostConnection = {
  __typename?: 'UserToPostConnection'
  /**
   * Edges for the UserToPostConnection connection
   * @deprecated
   */
  edges?: Maybe<Array<Maybe<UserToPostConnectionEdge>>>
  /**
   * The nodes of the connection, without the edges
   * @deprecated
   */
  nodes?: Maybe<Array<Maybe<Post>>>
  /**
   * Information about pagination in a connection.
   * @deprecated
   */
  pageInfo?: Maybe<WpPageInfo>
}

/** An edge in a connection */
export type UserToPostConnectionEdge = {
  __typename?: 'UserToPostConnectionEdge'
  /**
   * A cursor for use in pagination
   * @deprecated
   */
  cursor?: Maybe<Scalars['String']>
  /**
   * The item at the end of the edge
   * @deprecated
   */
  node?: Maybe<Post>
}

/** Arguments for filtering the UserToContentRevisionUnionConnection connection */
export type UserToContentRevisionUnionConnectionWhereArgs = {
  /** Filter the connection based on dates */
  dateQuery?: Maybe<DateQueryInput>
  /** True for objects with passwords; False for objects without passwords; null for all objects with or without passwords */
  hasPassword?: Maybe<Scalars['Boolean']>
  /** Specific ID of the object */
  id?: Maybe<Scalars['Int']>
  /** Array of IDs for the objects to retrieve */
  in?: Maybe<Array<Maybe<Scalars['ID']>>>
  /** Get objects with a specific mimeType property */
  mimeType?: Maybe<MimeTypeEnum>
  /** Slug / post_name of the object */
  name?: Maybe<Scalars['String']>
  /** Specify objects to retrieve. Use slugs */
  nameIn?: Maybe<Array<Maybe<Scalars['String']>>>
  /** Specify IDs NOT to retrieve. If this is used in the same query as "in", it will be ignored */
  notIn?: Maybe<Array<Maybe<Scalars['ID']>>>
  /** What paramater to use to order the objects by. */
  orderby?: Maybe<Array<Maybe<PostObjectsConnectionOrderbyInput>>>
  /** Use ID to return only children. Use 0 to return only top-level items */
  parent?: Maybe<Scalars['String']>
  /** Specify objects whose parent is in an array */
  parentIn?: Maybe<Array<Maybe<Scalars['ID']>>>
  /** Specify posts whose parent is not in an array */
  parentNotIn?: Maybe<Array<Maybe<Scalars['ID']>>>
  /** Show posts with a specific password. */
  password?: Maybe<Scalars['String']>
  /** Show Posts based on a keyword search */
  search?: Maybe<Scalars['String']>
  stati?: Maybe<Array<Maybe<PostStatusEnum>>>
  status?: Maybe<PostStatusEnum>
  /** Title of the object */
  title?: Maybe<Scalars['String']>
}

/** Connection between the User type and the ContentRevisionUnion type */
export type UserToContentRevisionUnionConnection = {
  __typename?: 'UserToContentRevisionUnionConnection'
  /**
   * Edges for the UserToContentRevisionUnionConnection connection
   * @deprecated
   */
  edges?: Maybe<Array<Maybe<UserToContentRevisionUnionConnectionEdge>>>
  /**
   * The nodes of the connection, without the edges
   * @deprecated
   */
  nodes?: Maybe<Array<Maybe<ContentRevisionUnion>>>
  /**
   * Information about pagination in a connection.
   * @deprecated
   */
  pageInfo?: Maybe<WpPageInfo>
}

/** An edge in a connection */
export type UserToContentRevisionUnionConnectionEdge = {
  __typename?: 'UserToContentRevisionUnionConnectionEdge'
  /**
   * A cursor for use in pagination
   * @deprecated
   */
  cursor?: Maybe<Scalars['String']>
  /**
   * The item at the end of the edge
   * @deprecated
   */
  node?: Maybe<ContentRevisionUnion>
}

export type ContentRevisionUnion = Post | Page

/** Connection between the User type and the UserRole type */
export type UserToUserRoleConnection = {
  __typename?: 'UserToUserRoleConnection'
  /**
   * Edges for the UserToUserRoleConnection connection
   * @deprecated
   */
  edges?: Maybe<Array<Maybe<UserToUserRoleConnectionEdge>>>
  /**
   * The nodes of the connection, without the edges
   * @deprecated
   */
  nodes?: Maybe<Array<Maybe<UserRole>>>
  /**
   * Information about pagination in a connection.
   * @deprecated
   */
  pageInfo?: Maybe<WpPageInfo>
}

/** An edge in a connection */
export type UserToUserRoleConnectionEdge = {
  __typename?: 'UserToUserRoleConnectionEdge'
  /**
   * A cursor for use in pagination
   * @deprecated
   */
  cursor?: Maybe<Scalars['String']>
  /**
   * The item at the end of the edge
   * @deprecated
   */
  node?: Maybe<UserRole>
}

/** A user role object */
export type UserRole = Node & {
  __typename?: 'UserRole'
  /**
   * The capabilities that belong to this role
   * @deprecated
   */
  capabilities?: Maybe<Array<Maybe<Scalars['String']>>>
  /**
   * The display name of the role
   * @deprecated
   */
  displayName?: Maybe<Scalars['String']>
  /**
   * The globally unique identifier for the user role object.
   * @deprecated
   */
  id: Scalars['ID']
  /**
   * Whether the object is restricted from the current viewer
   * @deprecated
   */
  isRestricted?: Maybe<Scalars['Boolean']>
  /**
   * The registered name of the role
   * @deprecated
   */
  name?: Maybe<Scalars['String']>
}

/** A node that can have an excerpt */
export type NodeWithExcerpt = {
  /** The excerpt of the post. */
  excerpt?: Maybe<Scalars['String']>
}

/** A node that can have an excerpt */
export type NodeWithExcerptExcerptArgs = {
  format?: Maybe<PostObjectFieldFormatEnum>
}

/** A node that can have trackbacks and pingbacks */
export type NodeWithTrackbacks = {
  /** Whether the pings are open or closed for this particular post. */
  pingStatus?: Maybe<Scalars['String']>
  /** URLs that have been pinged. */
  pinged?: Maybe<Array<Maybe<Scalars['String']>>>
  /** URLs queued to be pinged. */
  toPing?: Maybe<Array<Maybe<Scalars['String']>>>
}

/** Arguments for filtering the PostToCategoryConnection connection */
export type PostToCategoryConnectionWhereArgs = {
  /** Unique cache key to be produced when this query is stored in an object cache. Default is 'core'. */
  cacheDomain?: Maybe<Scalars['String']>
  /** Term ID to retrieve child terms of. If multiple taxonomies are passed, $child_of is ignored. Default 0. */
  childOf?: Maybe<Scalars['Int']>
  /** True to limit results to terms that have no children. This parameter has no effect on non-hierarchical taxonomies. Default false. */
  childless?: Maybe<Scalars['Boolean']>
  /** Retrieve terms where the description is LIKE the input value. Default empty. */
  descriptionLike?: Maybe<Scalars['String']>
  /** Array of term ids to exclude. If $include is non-empty, $exclude is ignored. Default empty array. */
  exclude?: Maybe<Array<Maybe<Scalars['ID']>>>
  /** Array of term ids to exclude along with all of their descendant terms. If $include is non-empty, $exclude_tree is ignored. Default empty array. */
  excludeTree?: Maybe<Array<Maybe<Scalars['ID']>>>
  /** Whether to hide terms not assigned to any posts. Accepts true or false. Default false */
  hideEmpty?: Maybe<Scalars['Boolean']>
  /** Whether to include terms that have non-empty descendants (even if $hide_empty is set to true). Default true. */
  hierarchical?: Maybe<Scalars['Boolean']>
  /** Array of term ids to include. Default empty array. */
  include?: Maybe<Array<Maybe<Scalars['ID']>>>
  /** Array of names to return term(s) for. Default empty. */
  name?: Maybe<Array<Maybe<Scalars['String']>>>
  /** Retrieve terms where the name is LIKE the input value. Default empty. */
  nameLike?: Maybe<Scalars['String']>
  /** Array of object IDs. Results will be limited to terms associated with these objects. */
  objectIds?: Maybe<Array<Maybe<Scalars['ID']>>>
  /** Field(s) to order terms by. Defaults to 'name'. */
  orderby?: Maybe<TermObjectsConnectionOrderbyEnum>
  /** Whether to pad the quantity of a term's children in the quantity of each term's "count" object variable. Default false. */
  padCounts?: Maybe<Scalars['Boolean']>
  /** Parent term ID to retrieve direct-child terms of. Default empty. */
  parent?: Maybe<Scalars['Int']>
  /** Search criteria to match terms. Will be SQL-formatted with wildcards before and after. Default empty. */
  search?: Maybe<Scalars['String']>
  /** Default false. If true, only the items connected to the source item will be returned. If false, all items will be returned regardless of connection to the source */
  shouldOnlyIncludeConnectedItems?: Maybe<Scalars['Boolean']>
  /** Default false. If true, the connection will be output in a flat list instead of the hierarchical list. So child terms will be output in the same level as the parent terms */
  shouldOutputInFlatList?: Maybe<Scalars['Boolean']>
  /** Array of slugs to return term(s) for. Default empty. */
  slug?: Maybe<Array<Maybe<Scalars['String']>>>
  /** Array of term taxonomy IDs, to match when querying terms. */
  termTaxonomId?: Maybe<Array<Maybe<Scalars['ID']>>>
  /** Whether to prime meta caches for matched terms. Default true. */
  updateTermMetaCache?: Maybe<Scalars['Boolean']>
}

/** Connection between the post type and the category type */
export type PostToCategoryConnection = {
  __typename?: 'PostToCategoryConnection'
  /**
   * Edges for the PostToCategoryConnection connection
   * @deprecated
   */
  edges?: Maybe<Array<Maybe<PostToCategoryConnectionEdge>>>
  /**
   * The nodes of the connection, without the edges
   * @deprecated
   */
  nodes?: Maybe<Array<Maybe<Category>>>
  /**
   * Information about pagination in a connection.
   * @deprecated
   */
  pageInfo?: Maybe<WpPageInfo>
}

/** An edge in a connection */
export type PostToCategoryConnectionEdge = {
  __typename?: 'PostToCategoryConnectionEdge'
  /**
   * A cursor for use in pagination
   * @deprecated
   */
  cursor?: Maybe<Scalars['String']>
  /**
   * The item at the end of the edge
   * @deprecated
   */
  node?: Maybe<Category>
}

/** Arguments for filtering the PostToCommentConnection connection */
export type PostToCommentConnectionWhereArgs = {
  /** Comment author email address. */
  authorEmail?: Maybe<Scalars['String']>
  /** Array of author IDs to include comments for. */
  authorIn?: Maybe<Array<Maybe<Scalars['ID']>>>
  /** Array of author IDs to exclude comments for. */
  authorNotIn?: Maybe<Array<Maybe<Scalars['ID']>>>
  /** Comment author URL. */
  authorUrl?: Maybe<Scalars['String']>
  /** Array of comment IDs to include. */
  commentIn?: Maybe<Array<Maybe<Scalars['ID']>>>
  /**
   * Array of IDs of users whose unapproved comments will be returned by the
   * 							query regardless of status.
   */
  commentNotIn?: Maybe<Array<Maybe<Scalars['ID']>>>
  /** Include comments of a given type. */
  commentType?: Maybe<Scalars['String']>
  /** Include comments from a given array of comment types. */
  commentTypeIn?: Maybe<Array<Maybe<Scalars['String']>>>
  /** Exclude comments from a given array of comment types. */
  commentTypeNotIn?: Maybe<Scalars['String']>
  /** Content object author ID to limit results by. */
  contentAuthor?: Maybe<Array<Maybe<Scalars['ID']>>>
  /** Array of author IDs to retrieve comments for. */
  contentAuthorIn?: Maybe<Array<Maybe<Scalars['ID']>>>
  /** Array of author IDs *not* to retrieve comments for. */
  contentAuthorNotIn?: Maybe<Array<Maybe<Scalars['ID']>>>
  /**
   * Limit results to those affiliated with a given content object
   * 							ID.
   */
  contentId?: Maybe<Scalars['ID']>
  /**
   * Array of content object IDs to include affiliated comments
   * 							for.
   */
  contentIdIn?: Maybe<Array<Maybe<Scalars['ID']>>>
  /**
   * Array of content object IDs to exclude affiliated comments
   * 							for.
   */
  contentIdNotIn?: Maybe<Array<Maybe<Scalars['ID']>>>
  /** Content object name to retrieve affiliated comments for. */
  contentName?: Maybe<Scalars['String']>
  /** Content Object parent ID to retrieve affiliated comments for. */
  contentParent?: Maybe<Scalars['Int']>
  /**
   * Array of content object statuses to retrieve affiliated comments for.
   * 							Pass 'any' to match any value.
   */
  contentStatus?: Maybe<Array<Maybe<PostStatusEnum>>>
  /** Content object type or array of types to retrieve affiliated comments for. Pass 'any' to match any value. */
  contentType?: Maybe<Array<Maybe<ContentTypeEnum>>>
  /** Array of IDs or email addresses of users whose unapproved comments will be returned by the query regardless of $status. Default empty */
  includeUnapproved?: Maybe<Array<Maybe<Scalars['ID']>>>
  /** Karma score to retrieve matching comments for. */
  karma?: Maybe<Scalars['Int']>
  /** The cardinality of the order of the connection */
  order?: Maybe<OrderEnum>
  /** Field to order the comments by. */
  orderby?: Maybe<CommentsConnectionOrderbyEnum>
  /** Parent ID of comment to retrieve children of. */
  parent?: Maybe<Scalars['Int']>
  /** Array of parent IDs of comments to retrieve children for. */
  parentIn?: Maybe<Array<Maybe<Scalars['ID']>>>
  /**
   * Array of parent IDs of comments *not* to retrieve children
   * 							for.
   */
  parentNotIn?: Maybe<Array<Maybe<Scalars['ID']>>>
  /** Search term(s) to retrieve matching comments for. */
  search?: Maybe<Scalars['String']>
  /** Comment status to limit results by. */
  status?: Maybe<Scalars['String']>
  /** Include comments for a specific user ID. */
  userId?: Maybe<Scalars['ID']>
}

/** Connection between the post type and the Comment type */
export type PostToCommentConnection = {
  __typename?: 'PostToCommentConnection'
  /**
   * Edges for the PostToCommentConnection connection
   * @deprecated
   */
  edges?: Maybe<Array<Maybe<PostToCommentConnectionEdge>>>
  /**
   * The nodes of the connection, without the edges
   * @deprecated
   */
  nodes?: Maybe<Array<Maybe<Comment>>>
  /**
   * Information about pagination in a connection.
   * @deprecated
   */
  pageInfo?: Maybe<WpPageInfo>
}

/** An edge in a connection */
export type PostToCommentConnectionEdge = {
  __typename?: 'PostToCommentConnectionEdge'
  /**
   * A cursor for use in pagination
   * @deprecated
   */
  cursor?: Maybe<Scalars['String']>
  /**
   * The item at the end of the edge
   * @deprecated
   */
  node?: Maybe<Comment>
}

/** Connection between the post type and the ContentType type */
export type PostToContentTypeConnection = {
  __typename?: 'PostToContentTypeConnection'
  /**
   * The nodes of the connection, without the edges
   * @deprecated
   */
  node?: Maybe<ContentType>
}

/** Arguments for filtering the PostToPostFormatConnection connection */
export type PostToPostFormatConnectionWhereArgs = {
  /** Unique cache key to be produced when this query is stored in an object cache. Default is 'core'. */
  cacheDomain?: Maybe<Scalars['String']>
  /** Term ID to retrieve child terms of. If multiple taxonomies are passed, $child_of is ignored. Default 0. */
  childOf?: Maybe<Scalars['Int']>
  /** True to limit results to terms that have no children. This parameter has no effect on non-hierarchical taxonomies. Default false. */
  childless?: Maybe<Scalars['Boolean']>
  /** Retrieve terms where the description is LIKE the input value. Default empty. */
  descriptionLike?: Maybe<Scalars['String']>
  /** Array of term ids to exclude. If $include is non-empty, $exclude is ignored. Default empty array. */
  exclude?: Maybe<Array<Maybe<Scalars['ID']>>>
  /** Array of term ids to exclude along with all of their descendant terms. If $include is non-empty, $exclude_tree is ignored. Default empty array. */
  excludeTree?: Maybe<Array<Maybe<Scalars['ID']>>>
  /** Whether to hide terms not assigned to any posts. Accepts true or false. Default false */
  hideEmpty?: Maybe<Scalars['Boolean']>
  /** Whether to include terms that have non-empty descendants (even if $hide_empty is set to true). Default true. */
  hierarchical?: Maybe<Scalars['Boolean']>
  /** Array of term ids to include. Default empty array. */
  include?: Maybe<Array<Maybe<Scalars['ID']>>>
  /** Array of names to return term(s) for. Default empty. */
  name?: Maybe<Array<Maybe<Scalars['String']>>>
  /** Retrieve terms where the name is LIKE the input value. Default empty. */
  nameLike?: Maybe<Scalars['String']>
  /** Array of object IDs. Results will be limited to terms associated with these objects. */
  objectIds?: Maybe<Array<Maybe<Scalars['ID']>>>
  /** Field(s) to order terms by. Defaults to 'name'. */
  orderby?: Maybe<TermObjectsConnectionOrderbyEnum>
  /** Whether to pad the quantity of a term's children in the quantity of each term's "count" object variable. Default false. */
  padCounts?: Maybe<Scalars['Boolean']>
  /** Parent term ID to retrieve direct-child terms of. Default empty. */
  parent?: Maybe<Scalars['Int']>
  /** Search criteria to match terms. Will be SQL-formatted with wildcards before and after. Default empty. */
  search?: Maybe<Scalars['String']>
  /** Default false. If true, only the items connected to the source item will be returned. If false, all items will be returned regardless of connection to the source */
  shouldOnlyIncludeConnectedItems?: Maybe<Scalars['Boolean']>
  /** Default false. If true, the connection will be output in a flat list instead of the hierarchical list. So child terms will be output in the same level as the parent terms */
  shouldOutputInFlatList?: Maybe<Scalars['Boolean']>
  /** Array of slugs to return term(s) for. Default empty. */
  slug?: Maybe<Array<Maybe<Scalars['String']>>>
  /** Array of term taxonomy IDs, to match when querying terms. */
  termTaxonomId?: Maybe<Array<Maybe<Scalars['ID']>>>
  /** Whether to prime meta caches for matched terms. Default true. */
  updateTermMetaCache?: Maybe<Scalars['Boolean']>
}

/** Connection between the post type and the postFormat type */
export type PostToPostFormatConnection = {
  __typename?: 'PostToPostFormatConnection'
  /**
   * Edges for the PostToPostFormatConnection connection
   * @deprecated
   */
  edges?: Maybe<Array<Maybe<PostToPostFormatConnectionEdge>>>
  /**
   * The nodes of the connection, without the edges
   * @deprecated
   */
  nodes?: Maybe<Array<Maybe<PostFormat>>>
  /**
   * Information about pagination in a connection.
   * @deprecated
   */
  pageInfo?: Maybe<WpPageInfo>
}

/** An edge in a connection */
export type PostToPostFormatConnectionEdge = {
  __typename?: 'PostToPostFormatConnectionEdge'
  /**
   * A cursor for use in pagination
   * @deprecated
   */
  cursor?: Maybe<Scalars['String']>
  /**
   * The item at the end of the edge
   * @deprecated
   */
  node?: Maybe<PostFormat>
}

/** Arguments for filtering the postToRevisionConnection connection */
export type PostToRevisionConnectionWhereArgs = {
  /** The user that's connected as the author of the object. Use the userId for the author object. */
  author?: Maybe<Scalars['Int']>
  /** Find objects connected to author(s) in the array of author's userIds */
  authorIn?: Maybe<Array<Maybe<Scalars['ID']>>>
  /** Find objects connected to the author by the author's nicename */
  authorName?: Maybe<Scalars['String']>
  /** Find objects NOT connected to author(s) in the array of author's userIds */
  authorNotIn?: Maybe<Array<Maybe<Scalars['ID']>>>
  /** Category ID */
  categoryId?: Maybe<Scalars['Int']>
  /** Array of category IDs, used to display objects from one category OR another */
  categoryIn?: Maybe<Array<Maybe<Scalars['ID']>>>
  /** Use Category Slug */
  categoryName?: Maybe<Scalars['String']>
  /** Array of category IDs, used to display objects from one category OR another */
  categoryNotIn?: Maybe<Array<Maybe<Scalars['ID']>>>
  /** Filter the connection based on dates */
  dateQuery?: Maybe<DateQueryInput>
  /** True for objects with passwords; False for objects without passwords; null for all objects with or without passwords */
  hasPassword?: Maybe<Scalars['Boolean']>
  /** Specific ID of the object */
  id?: Maybe<Scalars['Int']>
  /** Array of IDs for the objects to retrieve */
  in?: Maybe<Array<Maybe<Scalars['ID']>>>
  /** Get objects with a specific mimeType property */
  mimeType?: Maybe<MimeTypeEnum>
  /** Slug / post_name of the object */
  name?: Maybe<Scalars['String']>
  /** Specify objects to retrieve. Use slugs */
  nameIn?: Maybe<Array<Maybe<Scalars['String']>>>
  /** Specify IDs NOT to retrieve. If this is used in the same query as "in", it will be ignored */
  notIn?: Maybe<Array<Maybe<Scalars['ID']>>>
  /** What paramater to use to order the objects by. */
  orderby?: Maybe<Array<Maybe<PostObjectsConnectionOrderbyInput>>>
  /** Use ID to return only children. Use 0 to return only top-level items */
  parent?: Maybe<Scalars['String']>
  /** Specify objects whose parent is in an array */
  parentIn?: Maybe<Array<Maybe<Scalars['ID']>>>
  /** Specify posts whose parent is not in an array */
  parentNotIn?: Maybe<Array<Maybe<Scalars['ID']>>>
  /** Show posts with a specific password. */
  password?: Maybe<Scalars['String']>
  /** Show Posts based on a keyword search */
  search?: Maybe<Scalars['String']>
  stati?: Maybe<Array<Maybe<PostStatusEnum>>>
  status?: Maybe<PostStatusEnum>
  /** Tag Slug */
  tag?: Maybe<Scalars['String']>
  /** Use Tag ID */
  tagId?: Maybe<Scalars['String']>
  /** Array of tag IDs, used to display objects from one tag OR another */
  tagIn?: Maybe<Array<Maybe<Scalars['ID']>>>
  /** Array of tag IDs, used to display objects from one tag OR another */
  tagNotIn?: Maybe<Array<Maybe<Scalars['ID']>>>
  /** Array of tag slugs, used to display objects from one tag OR another */
  tagSlugAnd?: Maybe<Array<Maybe<Scalars['String']>>>
  /** Array of tag slugs, used to exclude objects in specified tags */
  tagSlugIn?: Maybe<Array<Maybe<Scalars['String']>>>
  /** Title of the object */
  title?: Maybe<Scalars['String']>
}

/** Connection between the post type and the post type */
export type PostToRevisionConnection = {
  __typename?: 'PostToRevisionConnection'
  /**
   * Edges for the postToRevisionConnection connection
   * @deprecated
   */
  edges?: Maybe<Array<Maybe<PostToRevisionConnectionEdge>>>
  /**
   * The nodes of the connection, without the edges
   * @deprecated
   */
  nodes?: Maybe<Array<Maybe<Post>>>
  /**
   * Information about pagination in a connection.
   * @deprecated
   */
  pageInfo?: Maybe<WpPageInfo>
}

/** An edge in a connection */
export type PostToRevisionConnectionEdge = {
  __typename?: 'PostToRevisionConnectionEdge'
  /**
   * A cursor for use in pagination
   * @deprecated
   */
  cursor?: Maybe<Scalars['String']>
  /**
   * The item at the end of the edge
   * @deprecated
   */
  node?: Maybe<Post>
}

/** Arguments for filtering the PostToTagConnection connection */
export type PostToTagConnectionWhereArgs = {
  /** Unique cache key to be produced when this query is stored in an object cache. Default is 'core'. */
  cacheDomain?: Maybe<Scalars['String']>
  /** Term ID to retrieve child terms of. If multiple taxonomies are passed, $child_of is ignored. Default 0. */
  childOf?: Maybe<Scalars['Int']>
  /** True to limit results to terms that have no children. This parameter has no effect on non-hierarchical taxonomies. Default false. */
  childless?: Maybe<Scalars['Boolean']>
  /** Retrieve terms where the description is LIKE the input value. Default empty. */
  descriptionLike?: Maybe<Scalars['String']>
  /** Array of term ids to exclude. If $include is non-empty, $exclude is ignored. Default empty array. */
  exclude?: Maybe<Array<Maybe<Scalars['ID']>>>
  /** Array of term ids to exclude along with all of their descendant terms. If $include is non-empty, $exclude_tree is ignored. Default empty array. */
  excludeTree?: Maybe<Array<Maybe<Scalars['ID']>>>
  /** Whether to hide terms not assigned to any posts. Accepts true or false. Default false */
  hideEmpty?: Maybe<Scalars['Boolean']>
  /** Whether to include terms that have non-empty descendants (even if $hide_empty is set to true). Default true. */
  hierarchical?: Maybe<Scalars['Boolean']>
  /** Array of term ids to include. Default empty array. */
  include?: Maybe<Array<Maybe<Scalars['ID']>>>
  /** Array of names to return term(s) for. Default empty. */
  name?: Maybe<Array<Maybe<Scalars['String']>>>
  /** Retrieve terms where the name is LIKE the input value. Default empty. */
  nameLike?: Maybe<Scalars['String']>
  /** Array of object IDs. Results will be limited to terms associated with these objects. */
  objectIds?: Maybe<Array<Maybe<Scalars['ID']>>>
  /** Field(s) to order terms by. Defaults to 'name'. */
  orderby?: Maybe<TermObjectsConnectionOrderbyEnum>
  /** Whether to pad the quantity of a term's children in the quantity of each term's "count" object variable. Default false. */
  padCounts?: Maybe<Scalars['Boolean']>
  /** Parent term ID to retrieve direct-child terms of. Default empty. */
  parent?: Maybe<Scalars['Int']>
  /** Search criteria to match terms. Will be SQL-formatted with wildcards before and after. Default empty. */
  search?: Maybe<Scalars['String']>
  /** Default false. If true, only the items connected to the source item will be returned. If false, all items will be returned regardless of connection to the source */
  shouldOnlyIncludeConnectedItems?: Maybe<Scalars['Boolean']>
  /** Default false. If true, the connection will be output in a flat list instead of the hierarchical list. So child terms will be output in the same level as the parent terms */
  shouldOutputInFlatList?: Maybe<Scalars['Boolean']>
  /** Array of slugs to return term(s) for. Default empty. */
  slug?: Maybe<Array<Maybe<Scalars['String']>>>
  /** Array of term taxonomy IDs, to match when querying terms. */
  termTaxonomId?: Maybe<Array<Maybe<Scalars['ID']>>>
  /** Whether to prime meta caches for matched terms. Default true. */
  updateTermMetaCache?: Maybe<Scalars['Boolean']>
}

/** Connection between the post type and the tag type */
export type PostToTagConnection = {
  __typename?: 'PostToTagConnection'
  /**
   * Edges for the PostToTagConnection connection
   * @deprecated
   */
  edges?: Maybe<Array<Maybe<PostToTagConnectionEdge>>>
  /**
   * The nodes of the connection, without the edges
   * @deprecated
   */
  nodes?: Maybe<Array<Maybe<Tag>>>
  /**
   * Information about pagination in a connection.
   * @deprecated
   */
  pageInfo?: Maybe<WpPageInfo>
}

/** An edge in a connection */
export type PostToTagConnectionEdge = {
  __typename?: 'PostToTagConnectionEdge'
  /**
   * A cursor for use in pagination
   * @deprecated
   */
  cursor?: Maybe<Scalars['String']>
  /**
   * The item at the end of the edge
   * @deprecated
   */
  node?: Maybe<Tag>
}

/** Field Group */
export type Category_Showmenu = {
  __typename?: 'Category_Showmenu'
  /** @deprecated  */
  fieldGroupName?: Maybe<Scalars['String']>
  /** @deprecated  */
  showfooter?: Maybe<Scalars['Boolean']>
  /** @deprecated  */
  showheader?: Maybe<Scalars['Boolean']>
}

/** Connection between the category type and the Taxonomy type */
export type CategoryToTaxonomyConnection = {
  __typename?: 'CategoryToTaxonomyConnection'
  /**
   * The nodes of the connection, without the edges
   * @deprecated
   */
  node?: Maybe<Taxonomy>
}

/** The Type of Identifier used to fetch a single resource. Default is ID. */
export enum CategoryIdType {
  /** The Database ID for the node */
  DatabaseId = 'DATABASE_ID',
  /** The hashed Global ID */
  Id = 'ID',
  /** The name of the node */
  Name = 'NAME',
  /** Url friendly name of the node */
  Slug = 'SLUG',
  /** The URI for the node */
  Uri = 'URI',
}

/** Arguments for filtering the RootQueryToCommentConnection connection */
export type RootQueryToCommentConnectionWhereArgs = {
  /** Comment author email address. */
  authorEmail?: Maybe<Scalars['String']>
  /** Array of author IDs to include comments for. */
  authorIn?: Maybe<Array<Maybe<Scalars['ID']>>>
  /** Array of author IDs to exclude comments for. */
  authorNotIn?: Maybe<Array<Maybe<Scalars['ID']>>>
  /** Comment author URL. */
  authorUrl?: Maybe<Scalars['String']>
  /** Array of comment IDs to include. */
  commentIn?: Maybe<Array<Maybe<Scalars['ID']>>>
  /**
   * Array of IDs of users whose unapproved comments will be returned by the
   * 							query regardless of status.
   */
  commentNotIn?: Maybe<Array<Maybe<Scalars['ID']>>>
  /** Include comments of a given type. */
  commentType?: Maybe<Scalars['String']>
  /** Include comments from a given array of comment types. */
  commentTypeIn?: Maybe<Array<Maybe<Scalars['String']>>>
  /** Exclude comments from a given array of comment types. */
  commentTypeNotIn?: Maybe<Scalars['String']>
  /** Content object author ID to limit results by. */
  contentAuthor?: Maybe<Array<Maybe<Scalars['ID']>>>
  /** Array of author IDs to retrieve comments for. */
  contentAuthorIn?: Maybe<Array<Maybe<Scalars['ID']>>>
  /** Array of author IDs *not* to retrieve comments for. */
  contentAuthorNotIn?: Maybe<Array<Maybe<Scalars['ID']>>>
  /**
   * Limit results to those affiliated with a given content object
   * 							ID.
   */
  contentId?: Maybe<Scalars['ID']>
  /**
   * Array of content object IDs to include affiliated comments
   * 							for.
   */
  contentIdIn?: Maybe<Array<Maybe<Scalars['ID']>>>
  /**
   * Array of content object IDs to exclude affiliated comments
   * 							for.
   */
  contentIdNotIn?: Maybe<Array<Maybe<Scalars['ID']>>>
  /** Content object name to retrieve affiliated comments for. */
  contentName?: Maybe<Scalars['String']>
  /** Content Object parent ID to retrieve affiliated comments for. */
  contentParent?: Maybe<Scalars['Int']>
  /**
   * Array of content object statuses to retrieve affiliated comments for.
   * 							Pass 'any' to match any value.
   */
  contentStatus?: Maybe<Array<Maybe<PostStatusEnum>>>
  /** Content object type or array of types to retrieve affiliated comments for. Pass 'any' to match any value. */
  contentType?: Maybe<Array<Maybe<ContentTypeEnum>>>
  /** Array of IDs or email addresses of users whose unapproved comments will be returned by the query regardless of $status. Default empty */
  includeUnapproved?: Maybe<Array<Maybe<Scalars['ID']>>>
  /** Karma score to retrieve matching comments for. */
  karma?: Maybe<Scalars['Int']>
  /** The cardinality of the order of the connection */
  order?: Maybe<OrderEnum>
  /** Field to order the comments by. */
  orderby?: Maybe<CommentsConnectionOrderbyEnum>
  /** Parent ID of comment to retrieve children of. */
  parent?: Maybe<Scalars['Int']>
  /** Array of parent IDs of comments to retrieve children for. */
  parentIn?: Maybe<Array<Maybe<Scalars['ID']>>>
  /**
   * Array of parent IDs of comments *not* to retrieve children
   * 							for.
   */
  parentNotIn?: Maybe<Array<Maybe<Scalars['ID']>>>
  /** Search term(s) to retrieve matching comments for. */
  search?: Maybe<Scalars['String']>
  /** Comment status to limit results by. */
  status?: Maybe<Scalars['String']>
  /** Include comments for a specific user ID. */
  userId?: Maybe<Scalars['ID']>
}

/** Connection between the RootQuery type and the Comment type */
export type RootQueryToCommentConnection = {
  __typename?: 'RootQueryToCommentConnection'
  /**
   * Edges for the RootQueryToCommentConnection connection
   * @deprecated
   */
  edges?: Maybe<Array<Maybe<RootQueryToCommentConnectionEdge>>>
  /**
   * The nodes of the connection, without the edges
   * @deprecated
   */
  nodes?: Maybe<Array<Maybe<Comment>>>
  /**
   * Information about pagination in a connection.
   * @deprecated
   */
  pageInfo?: Maybe<WpPageInfo>
}

/** An edge in a connection */
export type RootQueryToCommentConnectionEdge = {
  __typename?: 'RootQueryToCommentConnectionEdge'
  /**
   * A cursor for use in pagination
   * @deprecated
   */
  cursor?: Maybe<Scalars['String']>
  /**
   * The item at the end of the edge
   * @deprecated
   */
  node?: Maybe<Comment>
}

/** The Type of Identifier used to fetch a single resource. Default is ID. */
export enum ContentNodeIdTypeEnum {
  /** Identify a resource by the Database ID. */
  DatabaseId = 'DATABASE_ID',
  /** Identify a resource by the (hashed) Global ID. */
  Id = 'ID',
  /** Identify a resource by the URI. */
  Uri = 'URI',
}

/** Arguments for filtering the RootQueryToContentNodeConnection connection */
export type RootQueryToContentNodeConnectionWhereArgs = {
  /** The Types of content to filter */
  contentTypes?: Maybe<Array<Maybe<ContentTypeEnum>>>
  /** Filter the connection based on dates */
  dateQuery?: Maybe<DateQueryInput>
  /** True for objects with passwords; False for objects without passwords; null for all objects with or without passwords */
  hasPassword?: Maybe<Scalars['Boolean']>
  /** Specific ID of the object */
  id?: Maybe<Scalars['Int']>
  /** Array of IDs for the objects to retrieve */
  in?: Maybe<Array<Maybe<Scalars['ID']>>>
  /** Get objects with a specific mimeType property */
  mimeType?: Maybe<MimeTypeEnum>
  /** Slug / post_name of the object */
  name?: Maybe<Scalars['String']>
  /** Specify objects to retrieve. Use slugs */
  nameIn?: Maybe<Array<Maybe<Scalars['String']>>>
  /** Specify IDs NOT to retrieve. If this is used in the same query as "in", it will be ignored */
  notIn?: Maybe<Array<Maybe<Scalars['ID']>>>
  /** What paramater to use to order the objects by. */
  orderby?: Maybe<Array<Maybe<PostObjectsConnectionOrderbyInput>>>
  /** Use ID to return only children. Use 0 to return only top-level items */
  parent?: Maybe<Scalars['String']>
  /** Specify objects whose parent is in an array */
  parentIn?: Maybe<Array<Maybe<Scalars['ID']>>>
  /** Specify posts whose parent is not in an array */
  parentNotIn?: Maybe<Array<Maybe<Scalars['ID']>>>
  /** Show posts with a specific password. */
  password?: Maybe<Scalars['String']>
  /** Show Posts based on a keyword search */
  search?: Maybe<Scalars['String']>
  stati?: Maybe<Array<Maybe<PostStatusEnum>>>
  status?: Maybe<PostStatusEnum>
  /** Title of the object */
  title?: Maybe<Scalars['String']>
}

/** Connection between the RootQuery type and the ContentNode type */
export type RootQueryToContentNodeConnection = {
  __typename?: 'RootQueryToContentNodeConnection'
  /**
   * Edges for the RootQueryToContentNodeConnection connection
   * @deprecated
   */
  edges?: Maybe<Array<Maybe<RootQueryToContentNodeConnectionEdge>>>
  /**
   * The nodes of the connection, without the edges
   * @deprecated
   */
  nodes?: Maybe<Array<Maybe<ContentNode>>>
  /**
   * Information about pagination in a connection.
   * @deprecated
   */
  pageInfo?: Maybe<WpPageInfo>
}

/** An edge in a connection */
export type RootQueryToContentNodeConnectionEdge = {
  __typename?: 'RootQueryToContentNodeConnectionEdge'
  /**
   * A cursor for use in pagination
   * @deprecated
   */
  cursor?: Maybe<Scalars['String']>
  /**
   * The item at the end of the edge
   * @deprecated
   */
  node?: Maybe<ContentNode>
}

/** The Type of Identifier used to fetch a single Content Type node. To be used along with the "id" field. Default is "ID". */
export enum ContentTypeIdTypeEnum {
  /** The globally unique ID */
  Id = 'ID',
  /** The name of the content type. */
  Name = 'NAME',
}

/** Connection between the RootQuery type and the ContentType type */
export type RootQueryToContentTypeConnection = {
  __typename?: 'RootQueryToContentTypeConnection'
  /**
   * Edges for the RootQueryToContentTypeConnection connection
   * @deprecated
   */
  edges?: Maybe<Array<Maybe<RootQueryToContentTypeConnectionEdge>>>
  /**
   * The nodes of the connection, without the edges
   * @deprecated
   */
  nodes?: Maybe<Array<Maybe<ContentType>>>
  /**
   * Information about pagination in a connection.
   * @deprecated
   */
  pageInfo?: Maybe<WpPageInfo>
}

/** An edge in a connection */
export type RootQueryToContentTypeConnectionEdge = {
  __typename?: 'RootQueryToContentTypeConnectionEdge'
  /**
   * A cursor for use in pagination
   * @deprecated
   */
  cursor?: Maybe<Scalars['String']>
  /**
   * The item at the end of the edge
   * @deprecated
   */
  node?: Maybe<ContentType>
}

/** The discussion setting type */
export type DiscussionSettings = {
  __typename?: 'DiscussionSettings'
  /**
   * Allow people to submit comments on new posts.
   * @deprecated
   */
  defaultCommentStatus?: Maybe<Scalars['String']>
  /**
   * Allow link notifications from other blogs (pingbacks and trackbacks) on new articles.
   * @deprecated
   */
  defaultPingStatus?: Maybe<Scalars['String']>
}

/** The general setting type */
export type GeneralSettings = {
  __typename?: 'GeneralSettings'
  /**
   * A date format for all date strings.
   * @deprecated
   */
  dateFormat?: Maybe<Scalars['String']>
  /**
   * Site tagline.
   * @deprecated
   */
  description?: Maybe<Scalars['String']>
  /**
   * This address is used for admin purposes, like new user notification.
   * @deprecated
   */
  email?: Maybe<Scalars['String']>
  /**
   * WordPress locale code.
   * @deprecated
   */
  language?: Maybe<Scalars['String']>
  /**
   * A day number of the week that the week should start on.
   * @deprecated
   */
  startOfWeek?: Maybe<Scalars['Int']>
  /**
   * A time format for all time strings.
   * @deprecated
   */
  timeFormat?: Maybe<Scalars['String']>
  /**
   * A city in the same timezone as you.
   * @deprecated
   */
  timezone?: Maybe<Scalars['String']>
  /**
   * Site title.
   * @deprecated
   */
  title?: Maybe<Scalars['String']>
  /**
   * Site URL.
   * @deprecated
   */
  url?: Maybe<Scalars['String']>
}

/** The Type of Identifier used to fetch a single resource. Default is ID. */
export enum MediaItemIdType {
  /** Identify a resource by the Database ID. */
  DatabaseId = 'DATABASE_ID',
  /** Identify a resource by the (hashed) Global ID. */
  Id = 'ID',
  /** Identify a resource by the URI. */
  Uri = 'URI',
  /** Identify a resource by the slug. Available to non-hierarchcial Types where the slug is a unique identifier. */
  Slug = 'SLUG',
  /** Identify a media item by its source url */
  SourceUrl = 'SOURCE_URL',
}

/** Arguments for filtering the RootQueryToMediaItemConnection connection */
export type RootQueryToMediaItemConnectionWhereArgs = {
  /** The user that's connected as the author of the object. Use the userId for the author object. */
  author?: Maybe<Scalars['Int']>
  /** Find objects connected to author(s) in the array of author's userIds */
  authorIn?: Maybe<Array<Maybe<Scalars['ID']>>>
  /** Find objects connected to the author by the author's nicename */
  authorName?: Maybe<Scalars['String']>
  /** Find objects NOT connected to author(s) in the array of author's userIds */
  authorNotIn?: Maybe<Array<Maybe<Scalars['ID']>>>
  /** Filter the connection based on dates */
  dateQuery?: Maybe<DateQueryInput>
  /** True for objects with passwords; False for objects without passwords; null for all objects with or without passwords */
  hasPassword?: Maybe<Scalars['Boolean']>
  /** Specific ID of the object */
  id?: Maybe<Scalars['Int']>
  /** Array of IDs for the objects to retrieve */
  in?: Maybe<Array<Maybe<Scalars['ID']>>>
  /** Get objects with a specific mimeType property */
  mimeType?: Maybe<MimeTypeEnum>
  /** Slug / post_name of the object */
  name?: Maybe<Scalars['String']>
  /** Specify objects to retrieve. Use slugs */
  nameIn?: Maybe<Array<Maybe<Scalars['String']>>>
  /** Specify IDs NOT to retrieve. If this is used in the same query as "in", it will be ignored */
  notIn?: Maybe<Array<Maybe<Scalars['ID']>>>
  /** What paramater to use to order the objects by. */
  orderby?: Maybe<Array<Maybe<PostObjectsConnectionOrderbyInput>>>
  /** Use ID to return only children. Use 0 to return only top-level items */
  parent?: Maybe<Scalars['String']>
  /** Specify objects whose parent is in an array */
  parentIn?: Maybe<Array<Maybe<Scalars['ID']>>>
  /** Specify posts whose parent is not in an array */
  parentNotIn?: Maybe<Array<Maybe<Scalars['ID']>>>
  /** Show posts with a specific password. */
  password?: Maybe<Scalars['String']>
  /** Show Posts based on a keyword search */
  search?: Maybe<Scalars['String']>
  stati?: Maybe<Array<Maybe<PostStatusEnum>>>
  status?: Maybe<PostStatusEnum>
  /** Title of the object */
  title?: Maybe<Scalars['String']>
}

/** Connection between the RootQuery type and the mediaItem type */
export type RootQueryToMediaItemConnection = {
  __typename?: 'RootQueryToMediaItemConnection'
  /**
   * Edges for the RootQueryToMediaItemConnection connection
   * @deprecated
   */
  edges?: Maybe<Array<Maybe<RootQueryToMediaItemConnectionEdge>>>
  /**
   * The nodes of the connection, without the edges
   * @deprecated
   */
  nodes?: Maybe<Array<Maybe<MediaItem>>>
  /**
   * Information about pagination in a connection.
   * @deprecated
   */
  pageInfo?: Maybe<WpPageInfo>
}

/** An edge in a connection */
export type RootQueryToMediaItemConnectionEdge = {
  __typename?: 'RootQueryToMediaItemConnectionEdge'
  /**
   * A cursor for use in pagination
   * @deprecated
   */
  cursor?: Maybe<Scalars['String']>
  /**
   * The item at the end of the edge
   * @deprecated
   */
  node?: Maybe<MediaItem>
}

/** Menus are the containers for navigation items. Menus can be assigned to menu locations, which are typically registered by the active theme. */
export type Menu = Node & {
  __typename?: 'Menu'
  /**
   * The number of items in the menu
   * @deprecated
   */
  count?: Maybe<Scalars['Int']>
  /**
   * The globally unique identifier of the nav menu object.
   * @deprecated
   */
  id: Scalars['ID']
  /**
   * Whether the object is restricted from the current viewer
   * @deprecated
   */
  isRestricted?: Maybe<Scalars['Boolean']>
  /**
   * WP ID of the nav menu.
   * @deprecated
   */
  menuId?: Maybe<Scalars['Int']>
  /**
   * Connection between the Menu type and the MenuItem type
   * @deprecated
   */
  menuItems?: Maybe<MenuToMenuItemConnection>
  /**
   * Display name of the menu. Equivalent to WP_Term-&gt;name.
   * @deprecated
   */
  name?: Maybe<Scalars['String']>
  /**
   * The url friendly name of the menu. Equivalent to WP_Term-&gt;slug
   * @deprecated
   */
  slug?: Maybe<Scalars['String']>
}

/** Menus are the containers for navigation items. Menus can be assigned to menu locations, which are typically registered by the active theme. */
export type MenuMenuItemsArgs = {
  first?: Maybe<Scalars['Int']>
  last?: Maybe<Scalars['Int']>
  after?: Maybe<Scalars['String']>
  before?: Maybe<Scalars['String']>
  where?: Maybe<MenuToMenuItemConnectionWhereArgs>
}

/** Arguments for filtering the MenuToMenuItemConnection connection */
export type MenuToMenuItemConnectionWhereArgs = {
  /** The ID of the object */
  id?: Maybe<Scalars['Int']>
  /** The menu location for the menu being queried */
  location?: Maybe<MenuLocationEnum>
}

/** Registered menu locations */
export enum MenuLocationEnum {
  Expanded = 'EXPANDED',
  Footer = 'FOOTER',
  Mobile = 'MOBILE',
  Primary = 'PRIMARY',
  Social = 'SOCIAL',
}

/** Connection between the Menu type and the MenuItem type */
export type MenuToMenuItemConnection = {
  __typename?: 'MenuToMenuItemConnection'
  /**
   * Edges for the MenuToMenuItemConnection connection
   * @deprecated
   */
  edges?: Maybe<Array<Maybe<MenuToMenuItemConnectionEdge>>>
  /**
   * The nodes of the connection, without the edges
   * @deprecated
   */
  nodes?: Maybe<Array<Maybe<MenuItem>>>
  /**
   * Information about pagination in a connection.
   * @deprecated
   */
  pageInfo?: Maybe<WpPageInfo>
}

/** An edge in a connection */
export type MenuToMenuItemConnectionEdge = {
  __typename?: 'MenuToMenuItemConnectionEdge'
  /**
   * A cursor for use in pagination
   * @deprecated
   */
  cursor?: Maybe<Scalars['String']>
  /**
   * The item at the end of the edge
   * @deprecated
   */
  node?: Maybe<MenuItem>
}

/** Navigation menu items are the individual items assigned to a menu. These are rendered as the links in a navigation menu. */
export type MenuItem = Node & {
  __typename?: 'MenuItem'
  /**
   * Connection between the MenuItem type and the MenuItem type
   * @deprecated
   */
  childItems?: Maybe<MenuItemToMenuItemConnection>
  /**
   * The object connected to this menu item.
   * @deprecated
   */
  connectedObject?: Maybe<MenuItemObjectUnion>
  /**
   * Class attribute for the menu item link
   * @deprecated
   */
  cssClasses?: Maybe<Array<Maybe<Scalars['String']>>>
  /**
   * Description of the menu item.
   * @deprecated
   */
  description?: Maybe<Scalars['String']>
  /**
   * The globally unique identifier of the nav menu item object.
   * @deprecated
   */
  id: Scalars['ID']
  /**
   * Whether the object is restricted from the current viewer
   * @deprecated
   */
  isRestricted?: Maybe<Scalars['Boolean']>
  /**
   * Label or title of the menu item.
   * @deprecated
   */
  label?: Maybe<Scalars['String']>
  /**
   * Link relationship (XFN) of the menu item.
   * @deprecated
   */
  linkRelationship?: Maybe<Scalars['String']>
  /**
   * WP ID of the menu item.
   * @deprecated
   */
  menuItemId?: Maybe<Scalars['Int']>
  /**
   * Target attribute for the menu item link.
   * @deprecated
   */
  target?: Maybe<Scalars['String']>
  /**
   * Title attribute for the menu item link
   * @deprecated
   */
  title?: Maybe<Scalars['String']>
  /**
   * URL or destination of the menu item.
   * @deprecated
   */
  url?: Maybe<Scalars['String']>
}

/** Navigation menu items are the individual items assigned to a menu. These are rendered as the links in a navigation menu. */
export type MenuItemChildItemsArgs = {
  first?: Maybe<Scalars['Int']>
  last?: Maybe<Scalars['Int']>
  after?: Maybe<Scalars['String']>
  before?: Maybe<Scalars['String']>
  where?: Maybe<MenuItemToMenuItemConnectionWhereArgs>
}

/** Arguments for filtering the MenuItemToMenuItemConnection connection */
export type MenuItemToMenuItemConnectionWhereArgs = {
  /** The ID of the object */
  id?: Maybe<Scalars['Int']>
  /** The menu location for the menu being queried */
  location?: Maybe<MenuLocationEnum>
}

/** Connection between the MenuItem type and the MenuItem type */
export type MenuItemToMenuItemConnection = {
  __typename?: 'MenuItemToMenuItemConnection'
  /**
   * Edges for the MenuItemToMenuItemConnection connection
   * @deprecated
   */
  edges?: Maybe<Array<Maybe<MenuItemToMenuItemConnectionEdge>>>
  /**
   * The nodes of the connection, without the edges
   * @deprecated
   */
  nodes?: Maybe<Array<Maybe<MenuItem>>>
  /**
   * Information about pagination in a connection.
   * @deprecated
   */
  pageInfo?: Maybe<WpPageInfo>
}

/** An edge in a connection */
export type MenuItemToMenuItemConnectionEdge = {
  __typename?: 'MenuItemToMenuItemConnectionEdge'
  /**
   * A cursor for use in pagination
   * @deprecated
   */
  cursor?: Maybe<Scalars['String']>
  /**
   * The item at the end of the edge
   * @deprecated
   */
  node?: Maybe<MenuItem>
}

export type MenuItemObjectUnion = Post | Page | Category | Tag | MenuItem

/** Arguments for filtering the RootQueryToMenuItemConnection connection */
export type RootQueryToMenuItemConnectionWhereArgs = {
  /** The ID of the object */
  id?: Maybe<Scalars['Int']>
  /** The menu location for the menu being queried */
  location?: Maybe<MenuLocationEnum>
}

/** Connection between the RootQuery type and the MenuItem type */
export type RootQueryToMenuItemConnection = {
  __typename?: 'RootQueryToMenuItemConnection'
  /**
   * Edges for the RootQueryToMenuItemConnection connection
   * @deprecated
   */
  edges?: Maybe<Array<Maybe<RootQueryToMenuItemConnectionEdge>>>
  /**
   * The nodes of the connection, without the edges
   * @deprecated
   */
  nodes?: Maybe<Array<Maybe<MenuItem>>>
  /**
   * Information about pagination in a connection.
   * @deprecated
   */
  pageInfo?: Maybe<WpPageInfo>
}

/** An edge in a connection */
export type RootQueryToMenuItemConnectionEdge = {
  __typename?: 'RootQueryToMenuItemConnectionEdge'
  /**
   * A cursor for use in pagination
   * @deprecated
   */
  cursor?: Maybe<Scalars['String']>
  /**
   * The item at the end of the edge
   * @deprecated
   */
  node?: Maybe<MenuItem>
}

/** Arguments for filtering the RootQueryToMenuConnection connection */
export type RootQueryToMenuConnectionWhereArgs = {
  /** The ID of the object */
  id?: Maybe<Scalars['Int']>
  /** The menu location for the menu being queried */
  location?: Maybe<MenuLocationEnum>
  /** The slug of the menu to query items for */
  slug?: Maybe<Scalars['String']>
}

/** Connection between the RootQuery type and the Menu type */
export type RootQueryToMenuConnection = {
  __typename?: 'RootQueryToMenuConnection'
  /**
   * Edges for the RootQueryToMenuConnection connection
   * @deprecated
   */
  edges?: Maybe<Array<Maybe<RootQueryToMenuConnectionEdge>>>
  /**
   * The nodes of the connection, without the edges
   * @deprecated
   */
  nodes?: Maybe<Array<Maybe<Menu>>>
  /**
   * Information about pagination in a connection.
   * @deprecated
   */
  pageInfo?: Maybe<WpPageInfo>
}

/** An edge in a connection */
export type RootQueryToMenuConnectionEdge = {
  __typename?: 'RootQueryToMenuConnectionEdge'
  /**
   * A cursor for use in pagination
   * @deprecated
   */
  cursor?: Maybe<Scalars['String']>
  /**
   * The item at the end of the edge
   * @deprecated
   */
  node?: Maybe<Menu>
}

/** The Type of Identifier used to fetch a single resource. Default is ID. */
export enum PageIdType {
  /** Identify a resource by the Database ID. */
  DatabaseId = 'DATABASE_ID',
  /** Identify a resource by the (hashed) Global ID. */
  Id = 'ID',
  /** Identify a resource by the URI. */
  Uri = 'URI',
}

/** Arguments for filtering the RootQueryToPageConnection connection */
export type RootQueryToPageConnectionWhereArgs = {
  /** The user that's connected as the author of the object. Use the userId for the author object. */
  author?: Maybe<Scalars['Int']>
  /** Find objects connected to author(s) in the array of author's userIds */
  authorIn?: Maybe<Array<Maybe<Scalars['ID']>>>
  /** Find objects connected to the author by the author's nicename */
  authorName?: Maybe<Scalars['String']>
  /** Find objects NOT connected to author(s) in the array of author's userIds */
  authorNotIn?: Maybe<Array<Maybe<Scalars['ID']>>>
  /** Filter the connection based on dates */
  dateQuery?: Maybe<DateQueryInput>
  /** True for objects with passwords; False for objects without passwords; null for all objects with or without passwords */
  hasPassword?: Maybe<Scalars['Boolean']>
  /** Specific ID of the object */
  id?: Maybe<Scalars['Int']>
  /** Array of IDs for the objects to retrieve */
  in?: Maybe<Array<Maybe<Scalars['ID']>>>
  /** Get objects with a specific mimeType property */
  mimeType?: Maybe<MimeTypeEnum>
  /** Slug / post_name of the object */
  name?: Maybe<Scalars['String']>
  /** Specify objects to retrieve. Use slugs */
  nameIn?: Maybe<Array<Maybe<Scalars['String']>>>
  /** Specify IDs NOT to retrieve. If this is used in the same query as "in", it will be ignored */
  notIn?: Maybe<Array<Maybe<Scalars['ID']>>>
  /** What paramater to use to order the objects by. */
  orderby?: Maybe<Array<Maybe<PostObjectsConnectionOrderbyInput>>>
  /** Use ID to return only children. Use 0 to return only top-level items */
  parent?: Maybe<Scalars['String']>
  /** Specify objects whose parent is in an array */
  parentIn?: Maybe<Array<Maybe<Scalars['ID']>>>
  /** Specify posts whose parent is not in an array */
  parentNotIn?: Maybe<Array<Maybe<Scalars['ID']>>>
  /** Show posts with a specific password. */
  password?: Maybe<Scalars['String']>
  /** Show Posts based on a keyword search */
  search?: Maybe<Scalars['String']>
  stati?: Maybe<Array<Maybe<PostStatusEnum>>>
  status?: Maybe<PostStatusEnum>
  /** Title of the object */
  title?: Maybe<Scalars['String']>
}

/** Connection between the RootQuery type and the page type */
export type RootQueryToPageConnection = {
  __typename?: 'RootQueryToPageConnection'
  /**
   * Edges for the RootQueryToPageConnection connection
   * @deprecated
   */
  edges?: Maybe<Array<Maybe<RootQueryToPageConnectionEdge>>>
  /**
   * The nodes of the connection, without the edges
   * @deprecated
   */
  nodes?: Maybe<Array<Maybe<Page>>>
  /**
   * Information about pagination in a connection.
   * @deprecated
   */
  pageInfo?: Maybe<WpPageInfo>
}

/** An edge in a connection */
export type RootQueryToPageConnectionEdge = {
  __typename?: 'RootQueryToPageConnectionEdge'
  /**
   * A cursor for use in pagination
   * @deprecated
   */
  cursor?: Maybe<Scalars['String']>
  /**
   * The item at the end of the edge
   * @deprecated
   */
  node?: Maybe<Page>
}

/** An plugin object */
export type Plugin = Node & {
  __typename?: 'Plugin'
  /**
   * Name of the plugin author(s), may also be a company name.
   * @deprecated
   */
  author?: Maybe<Scalars['String']>
  /**
   * URI for the related author(s)/company website.
   * @deprecated
   */
  authorUri?: Maybe<Scalars['String']>
  /**
   * Description of the plugin.
   * @deprecated
   */
  description?: Maybe<Scalars['String']>
  /**
   * The globally unique identifier of the plugin object.
   * @deprecated
   */
  id: Scalars['ID']
  /**
   * Whether the object is restricted from the current viewer
   * @deprecated
   */
  isRestricted?: Maybe<Scalars['Boolean']>
  /**
   * Display name of the plugin.
   * @deprecated
   */
  name?: Maybe<Scalars['String']>
  /**
   * URI for the plugin website. This is useful for directing users for support requests etc.
   * @deprecated
   */
  pluginUri?: Maybe<Scalars['String']>
  /**
   * Current version of the plugin.
   * @deprecated
   */
  version?: Maybe<Scalars['String']>
}

/** Connection between the RootQuery type and the Plugin type */
export type RootQueryToPluginConnection = {
  __typename?: 'RootQueryToPluginConnection'
  /**
   * Edges for the RootQueryToPluginConnection connection
   * @deprecated
   */
  edges?: Maybe<Array<Maybe<RootQueryToPluginConnectionEdge>>>
  /**
   * The nodes of the connection, without the edges
   * @deprecated
   */
  nodes?: Maybe<Array<Maybe<Plugin>>>
  /**
   * Information about pagination in a connection.
   * @deprecated
   */
  pageInfo?: Maybe<WpPageInfo>
}

/** An edge in a connection */
export type RootQueryToPluginConnectionEdge = {
  __typename?: 'RootQueryToPluginConnectionEdge'
  /**
   * A cursor for use in pagination
   * @deprecated
   */
  cursor?: Maybe<Scalars['String']>
  /**
   * The item at the end of the edge
   * @deprecated
   */
  node?: Maybe<Plugin>
}

/** The Type of Identifier used to fetch a single resource. Default is ID. */
export enum PostIdType {
  /** Identify a resource by the Database ID. */
  DatabaseId = 'DATABASE_ID',
  /** Identify a resource by the (hashed) Global ID. */
  Id = 'ID',
  /** Identify a resource by the URI. */
  Uri = 'URI',
  /** Identify a resource by the slug. Available to non-hierarchcial Types where the slug is a unique identifier. */
  Slug = 'SLUG',
}

/** The Type of Identifier used to fetch a single resource. Default is ID. */
export enum PostFormatIdType {
  /** The Database ID for the node */
  DatabaseId = 'DATABASE_ID',
  /** The hashed Global ID */
  Id = 'ID',
  /** The name of the node */
  Name = 'NAME',
  /** Url friendly name of the node */
  Slug = 'SLUG',
  /** The URI for the node */
  Uri = 'URI',
}

/** Arguments for filtering the RootQueryToPostFormatConnection connection */
export type RootQueryToPostFormatConnectionWhereArgs = {
  /** Unique cache key to be produced when this query is stored in an object cache. Default is 'core'. */
  cacheDomain?: Maybe<Scalars['String']>
  /** Term ID to retrieve child terms of. If multiple taxonomies are passed, $child_of is ignored. Default 0. */
  childOf?: Maybe<Scalars['Int']>
  /** True to limit results to terms that have no children. This parameter has no effect on non-hierarchical taxonomies. Default false. */
  childless?: Maybe<Scalars['Boolean']>
  /** Retrieve terms where the description is LIKE the input value. Default empty. */
  descriptionLike?: Maybe<Scalars['String']>
  /** Array of term ids to exclude. If $include is non-empty, $exclude is ignored. Default empty array. */
  exclude?: Maybe<Array<Maybe<Scalars['ID']>>>
  /** Array of term ids to exclude along with all of their descendant terms. If $include is non-empty, $exclude_tree is ignored. Default empty array. */
  excludeTree?: Maybe<Array<Maybe<Scalars['ID']>>>
  /** Whether to hide terms not assigned to any posts. Accepts true or false. Default false */
  hideEmpty?: Maybe<Scalars['Boolean']>
  /** Whether to include terms that have non-empty descendants (even if $hide_empty is set to true). Default true. */
  hierarchical?: Maybe<Scalars['Boolean']>
  /** Array of term ids to include. Default empty array. */
  include?: Maybe<Array<Maybe<Scalars['ID']>>>
  /** Array of names to return term(s) for. Default empty. */
  name?: Maybe<Array<Maybe<Scalars['String']>>>
  /** Retrieve terms where the name is LIKE the input value. Default empty. */
  nameLike?: Maybe<Scalars['String']>
  /** Array of object IDs. Results will be limited to terms associated with these objects. */
  objectIds?: Maybe<Array<Maybe<Scalars['ID']>>>
  /** Field(s) to order terms by. Defaults to 'name'. */
  orderby?: Maybe<TermObjectsConnectionOrderbyEnum>
  /** Whether to pad the quantity of a term's children in the quantity of each term's "count" object variable. Default false. */
  padCounts?: Maybe<Scalars['Boolean']>
  /** Parent term ID to retrieve direct-child terms of. Default empty. */
  parent?: Maybe<Scalars['Int']>
  /** Search criteria to match terms. Will be SQL-formatted with wildcards before and after. Default empty. */
  search?: Maybe<Scalars['String']>
  /** Default false. If true, only the items connected to the source item will be returned. If false, all items will be returned regardless of connection to the source */
  shouldOnlyIncludeConnectedItems?: Maybe<Scalars['Boolean']>
  /** Default false. If true, the connection will be output in a flat list instead of the hierarchical list. So child terms will be output in the same level as the parent terms */
  shouldOutputInFlatList?: Maybe<Scalars['Boolean']>
  /** Array of slugs to return term(s) for. Default empty. */
  slug?: Maybe<Array<Maybe<Scalars['String']>>>
  /** Array of term taxonomy IDs, to match when querying terms. */
  termTaxonomId?: Maybe<Array<Maybe<Scalars['ID']>>>
  /** Whether to prime meta caches for matched terms. Default true. */
  updateTermMetaCache?: Maybe<Scalars['Boolean']>
}

/** Connection between the RootQuery type and the postFormat type */
export type RootQueryToPostFormatConnection = {
  __typename?: 'RootQueryToPostFormatConnection'
  /**
   * Edges for the RootQueryToPostFormatConnection connection
   * @deprecated
   */
  edges?: Maybe<Array<Maybe<RootQueryToPostFormatConnectionEdge>>>
  /**
   * The nodes of the connection, without the edges
   * @deprecated
   */
  nodes?: Maybe<Array<Maybe<PostFormat>>>
  /**
   * Information about pagination in a connection.
   * @deprecated
   */
  pageInfo?: Maybe<WpPageInfo>
}

/** An edge in a connection */
export type RootQueryToPostFormatConnectionEdge = {
  __typename?: 'RootQueryToPostFormatConnectionEdge'
  /**
   * A cursor for use in pagination
   * @deprecated
   */
  cursor?: Maybe<Scalars['String']>
  /**
   * The item at the end of the edge
   * @deprecated
   */
  node?: Maybe<PostFormat>
}

/** Arguments for filtering the RootQueryToPostConnection connection */
export type RootQueryToPostConnectionWhereArgs = {
  /** The user that's connected as the author of the object. Use the userId for the author object. */
  author?: Maybe<Scalars['Int']>
  /** Find objects connected to author(s) in the array of author's userIds */
  authorIn?: Maybe<Array<Maybe<Scalars['ID']>>>
  /** Find objects connected to the author by the author's nicename */
  authorName?: Maybe<Scalars['String']>
  /** Find objects NOT connected to author(s) in the array of author's userIds */
  authorNotIn?: Maybe<Array<Maybe<Scalars['ID']>>>
  /** Category ID */
  categoryId?: Maybe<Scalars['Int']>
  /** Array of category IDs, used to display objects from one category OR another */
  categoryIn?: Maybe<Array<Maybe<Scalars['ID']>>>
  /** Use Category Slug */
  categoryName?: Maybe<Scalars['String']>
  /** Array of category IDs, used to display objects from one category OR another */
  categoryNotIn?: Maybe<Array<Maybe<Scalars['ID']>>>
  /** Filter the connection based on dates */
  dateQuery?: Maybe<DateQueryInput>
  /** True for objects with passwords; False for objects without passwords; null for all objects with or without passwords */
  hasPassword?: Maybe<Scalars['Boolean']>
  /** Specific ID of the object */
  id?: Maybe<Scalars['Int']>
  /** Array of IDs for the objects to retrieve */
  in?: Maybe<Array<Maybe<Scalars['ID']>>>
  /** Get objects with a specific mimeType property */
  mimeType?: Maybe<MimeTypeEnum>
  /** Slug / post_name of the object */
  name?: Maybe<Scalars['String']>
  /** Specify objects to retrieve. Use slugs */
  nameIn?: Maybe<Array<Maybe<Scalars['String']>>>
  /** Specify IDs NOT to retrieve. If this is used in the same query as "in", it will be ignored */
  notIn?: Maybe<Array<Maybe<Scalars['ID']>>>
  /** What paramater to use to order the objects by. */
  orderby?: Maybe<Array<Maybe<PostObjectsConnectionOrderbyInput>>>
  /** Use ID to return only children. Use 0 to return only top-level items */
  parent?: Maybe<Scalars['String']>
  /** Specify objects whose parent is in an array */
  parentIn?: Maybe<Array<Maybe<Scalars['ID']>>>
  /** Specify posts whose parent is not in an array */
  parentNotIn?: Maybe<Array<Maybe<Scalars['ID']>>>
  /** Show posts with a specific password. */
  password?: Maybe<Scalars['String']>
  /** Show Posts based on a keyword search */
  search?: Maybe<Scalars['String']>
  stati?: Maybe<Array<Maybe<PostStatusEnum>>>
  status?: Maybe<PostStatusEnum>
  /** Tag Slug */
  tag?: Maybe<Scalars['String']>
  /** Use Tag ID */
  tagId?: Maybe<Scalars['String']>
  /** Array of tag IDs, used to display objects from one tag OR another */
  tagIn?: Maybe<Array<Maybe<Scalars['ID']>>>
  /** Array of tag IDs, used to display objects from one tag OR another */
  tagNotIn?: Maybe<Array<Maybe<Scalars['ID']>>>
  /** Array of tag slugs, used to display objects from one tag OR another */
  tagSlugAnd?: Maybe<Array<Maybe<Scalars['String']>>>
  /** Array of tag slugs, used to exclude objects in specified tags */
  tagSlugIn?: Maybe<Array<Maybe<Scalars['String']>>>
  /** Title of the object */
  title?: Maybe<Scalars['String']>
}

/** Connection between the RootQuery type and the post type */
export type RootQueryToPostConnection = {
  __typename?: 'RootQueryToPostConnection'
  /**
   * Edges for the RootQueryToPostConnection connection
   * @deprecated
   */
  edges?: Maybe<Array<Maybe<RootQueryToPostConnectionEdge>>>
  /**
   * The nodes of the connection, without the edges
   * @deprecated
   */
  nodes?: Maybe<Array<Maybe<Post>>>
  /**
   * Information about pagination in a connection.
   * @deprecated
   */
  pageInfo?: Maybe<WpPageInfo>
}

/** An edge in a connection */
export type RootQueryToPostConnectionEdge = {
  __typename?: 'RootQueryToPostConnectionEdge'
  /**
   * A cursor for use in pagination
   * @deprecated
   */
  cursor?: Maybe<Scalars['String']>
  /**
   * The item at the end of the edge
   * @deprecated
   */
  node?: Maybe<Post>
}

/** The reading setting type */
export type ReadingSettings = {
  __typename?: 'ReadingSettings'
  /**
   * Blog pages show at most.
   * @deprecated
   */
  postsPerPage?: Maybe<Scalars['Int']>
}

/** Arguments for filtering the RootQueryToContentRevisionUnionConnection connection */
export type RootQueryToContentRevisionUnionConnectionWhereArgs = {
  /** Filter the connection based on dates */
  dateQuery?: Maybe<DateQueryInput>
  /** True for objects with passwords; False for objects without passwords; null for all objects with or without passwords */
  hasPassword?: Maybe<Scalars['Boolean']>
  /** Specific ID of the object */
  id?: Maybe<Scalars['Int']>
  /** Array of IDs for the objects to retrieve */
  in?: Maybe<Array<Maybe<Scalars['ID']>>>
  /** Get objects with a specific mimeType property */
  mimeType?: Maybe<MimeTypeEnum>
  /** Slug / post_name of the object */
  name?: Maybe<Scalars['String']>
  /** Specify objects to retrieve. Use slugs */
  nameIn?: Maybe<Array<Maybe<Scalars['String']>>>
  /** Specify IDs NOT to retrieve. If this is used in the same query as "in", it will be ignored */
  notIn?: Maybe<Array<Maybe<Scalars['ID']>>>
  /** What paramater to use to order the objects by. */
  orderby?: Maybe<Array<Maybe<PostObjectsConnectionOrderbyInput>>>
  /** Use ID to return only children. Use 0 to return only top-level items */
  parent?: Maybe<Scalars['String']>
  /** Specify objects whose parent is in an array */
  parentIn?: Maybe<Array<Maybe<Scalars['ID']>>>
  /** Specify posts whose parent is not in an array */
  parentNotIn?: Maybe<Array<Maybe<Scalars['ID']>>>
  /** Show posts with a specific password. */
  password?: Maybe<Scalars['String']>
  /** Show Posts based on a keyword search */
  search?: Maybe<Scalars['String']>
  stati?: Maybe<Array<Maybe<PostStatusEnum>>>
  status?: Maybe<PostStatusEnum>
  /** Title of the object */
  title?: Maybe<Scalars['String']>
}

/** Connection between the RootQuery type and the ContentRevisionUnion type */
export type RootQueryToContentRevisionUnionConnection = {
  __typename?: 'RootQueryToContentRevisionUnionConnection'
  /**
   * Edges for the RootQueryToContentRevisionUnionConnection connection
   * @deprecated
   */
  edges?: Maybe<Array<Maybe<RootQueryToContentRevisionUnionConnectionEdge>>>
  /**
   * The nodes of the connection, without the edges
   * @deprecated
   */
  nodes?: Maybe<Array<Maybe<ContentRevisionUnion>>>
  /**
   * Information about pagination in a connection.
   * @deprecated
   */
  pageInfo?: Maybe<WpPageInfo>
}

/** An edge in a connection */
export type RootQueryToContentRevisionUnionConnectionEdge = {
  __typename?: 'RootQueryToContentRevisionUnionConnectionEdge'
  /**
   * A cursor for use in pagination
   * @deprecated
   */
  cursor?: Maybe<Scalars['String']>
  /**
   * The item at the end of the edge
   * @deprecated
   */
  node?: Maybe<ContentRevisionUnion>
}

/** The Type of Identifier used to fetch a single resource. Default is ID. */
export enum TagIdType {
  /** The Database ID for the node */
  DatabaseId = 'DATABASE_ID',
  /** The hashed Global ID */
  Id = 'ID',
  /** The name of the node */
  Name = 'NAME',
  /** Url friendly name of the node */
  Slug = 'SLUG',
  /** The URI for the node */
  Uri = 'URI',
}

/** Arguments for filtering the RootQueryToTagConnection connection */
export type RootQueryToTagConnectionWhereArgs = {
  /** Unique cache key to be produced when this query is stored in an object cache. Default is 'core'. */
  cacheDomain?: Maybe<Scalars['String']>
  /** Term ID to retrieve child terms of. If multiple taxonomies are passed, $child_of is ignored. Default 0. */
  childOf?: Maybe<Scalars['Int']>
  /** True to limit results to terms that have no children. This parameter has no effect on non-hierarchical taxonomies. Default false. */
  childless?: Maybe<Scalars['Boolean']>
  /** Retrieve terms where the description is LIKE the input value. Default empty. */
  descriptionLike?: Maybe<Scalars['String']>
  /** Array of term ids to exclude. If $include is non-empty, $exclude is ignored. Default empty array. */
  exclude?: Maybe<Array<Maybe<Scalars['ID']>>>
  /** Array of term ids to exclude along with all of their descendant terms. If $include is non-empty, $exclude_tree is ignored. Default empty array. */
  excludeTree?: Maybe<Array<Maybe<Scalars['ID']>>>
  /** Whether to hide terms not assigned to any posts. Accepts true or false. Default false */
  hideEmpty?: Maybe<Scalars['Boolean']>
  /** Whether to include terms that have non-empty descendants (even if $hide_empty is set to true). Default true. */
  hierarchical?: Maybe<Scalars['Boolean']>
  /** Array of term ids to include. Default empty array. */
  include?: Maybe<Array<Maybe<Scalars['ID']>>>
  /** Array of names to return term(s) for. Default empty. */
  name?: Maybe<Array<Maybe<Scalars['String']>>>
  /** Retrieve terms where the name is LIKE the input value. Default empty. */
  nameLike?: Maybe<Scalars['String']>
  /** Array of object IDs. Results will be limited to terms associated with these objects. */
  objectIds?: Maybe<Array<Maybe<Scalars['ID']>>>
  /** Field(s) to order terms by. Defaults to 'name'. */
  orderby?: Maybe<TermObjectsConnectionOrderbyEnum>
  /** Whether to pad the quantity of a term's children in the quantity of each term's "count" object variable. Default false. */
  padCounts?: Maybe<Scalars['Boolean']>
  /** Parent term ID to retrieve direct-child terms of. Default empty. */
  parent?: Maybe<Scalars['Int']>
  /** Search criteria to match terms. Will be SQL-formatted with wildcards before and after. Default empty. */
  search?: Maybe<Scalars['String']>
  /** Default false. If true, only the items connected to the source item will be returned. If false, all items will be returned regardless of connection to the source */
  shouldOnlyIncludeConnectedItems?: Maybe<Scalars['Boolean']>
  /** Default false. If true, the connection will be output in a flat list instead of the hierarchical list. So child terms will be output in the same level as the parent terms */
  shouldOutputInFlatList?: Maybe<Scalars['Boolean']>
  /** Array of slugs to return term(s) for. Default empty. */
  slug?: Maybe<Array<Maybe<Scalars['String']>>>
  /** Array of term taxonomy IDs, to match when querying terms. */
  termTaxonomId?: Maybe<Array<Maybe<Scalars['ID']>>>
  /** Whether to prime meta caches for matched terms. Default true. */
  updateTermMetaCache?: Maybe<Scalars['Boolean']>
}

/** Connection between the RootQuery type and the tag type */
export type RootQueryToTagConnection = {
  __typename?: 'RootQueryToTagConnection'
  /**
   * Edges for the RootQueryToTagConnection connection
   * @deprecated
   */
  edges?: Maybe<Array<Maybe<RootQueryToTagConnectionEdge>>>
  /**
   * The nodes of the connection, without the edges
   * @deprecated
   */
  nodes?: Maybe<Array<Maybe<Tag>>>
  /**
   * Information about pagination in a connection.
   * @deprecated
   */
  pageInfo?: Maybe<WpPageInfo>
}

/** An edge in a connection */
export type RootQueryToTagConnectionEdge = {
  __typename?: 'RootQueryToTagConnectionEdge'
  /**
   * A cursor for use in pagination
   * @deprecated
   */
  cursor?: Maybe<Scalars['String']>
  /**
   * The item at the end of the edge
   * @deprecated
   */
  node?: Maybe<Tag>
}

/** Connection between the RootQuery type and the Taxonomy type */
export type RootQueryToTaxonomyConnection = {
  __typename?: 'RootQueryToTaxonomyConnection'
  /**
   * Edges for the RootQueryToTaxonomyConnection connection
   * @deprecated
   */
  edges?: Maybe<Array<Maybe<RootQueryToTaxonomyConnectionEdge>>>
  /**
   * The nodes of the connection, without the edges
   * @deprecated
   */
  nodes?: Maybe<Array<Maybe<Taxonomy>>>
  /**
   * Information about pagination in a connection.
   * @deprecated
   */
  pageInfo?: Maybe<WpPageInfo>
}

/** An edge in a connection */
export type RootQueryToTaxonomyConnectionEdge = {
  __typename?: 'RootQueryToTaxonomyConnectionEdge'
  /**
   * A cursor for use in pagination
   * @deprecated
   */
  cursor?: Maybe<Scalars['String']>
  /**
   * The item at the end of the edge
   * @deprecated
   */
  node?: Maybe<Taxonomy>
}

/** The Type of Identifier used to fetch a single Taxonomy node. To be used along with the "id" field. Default is "ID". */
export enum TaxonomyIdTypeEnum {
  /** The globally unique ID */
  Id = 'ID',
  /** The name of the taxonomy */
  Name = 'NAME',
}

/** The Type of Identifier used to fetch a single resource. Default is "ID". To be used along with the "id" field. */
export enum TermNodeIdTypeEnum {
  /** The Database ID for the node */
  DatabaseId = 'DATABASE_ID',
  /** The hashed Global ID */
  Id = 'ID',
  /** The name of the node */
  Name = 'NAME',
  /** Url friendly name of the node */
  Slug = 'SLUG',
  /** The URI for the node */
  Uri = 'URI',
}

/** Arguments for filtering the RootQueryToTermNodeConnection connection */
export type RootQueryToTermNodeConnectionWhereArgs = {
  /** Unique cache key to be produced when this query is stored in an object cache. Default is 'core'. */
  cacheDomain?: Maybe<Scalars['String']>
  /** Term ID to retrieve child terms of. If multiple taxonomies are passed, $child_of is ignored. Default 0. */
  childOf?: Maybe<Scalars['Int']>
  /** True to limit results to terms that have no children. This parameter has no effect on non-hierarchical taxonomies. Default false. */
  childless?: Maybe<Scalars['Boolean']>
  /** Retrieve terms where the description is LIKE the input value. Default empty. */
  descriptionLike?: Maybe<Scalars['String']>
  /** Array of term ids to exclude. If $include is non-empty, $exclude is ignored. Default empty array. */
  exclude?: Maybe<Array<Maybe<Scalars['ID']>>>
  /** Array of term ids to exclude along with all of their descendant terms. If $include is non-empty, $exclude_tree is ignored. Default empty array. */
  excludeTree?: Maybe<Array<Maybe<Scalars['ID']>>>
  /** Whether to hide terms not assigned to any posts. Accepts true or false. Default false */
  hideEmpty?: Maybe<Scalars['Boolean']>
  /** Whether to include terms that have non-empty descendants (even if $hide_empty is set to true). Default true. */
  hierarchical?: Maybe<Scalars['Boolean']>
  /** Array of term ids to include. Default empty array. */
  include?: Maybe<Array<Maybe<Scalars['ID']>>>
  /** Array of names to return term(s) for. Default empty. */
  name?: Maybe<Array<Maybe<Scalars['String']>>>
  /** Retrieve terms where the name is LIKE the input value. Default empty. */
  nameLike?: Maybe<Scalars['String']>
  /** Array of object IDs. Results will be limited to terms associated with these objects. */
  objectIds?: Maybe<Array<Maybe<Scalars['ID']>>>
  /** Field(s) to order terms by. Defaults to 'name'. */
  orderby?: Maybe<TermObjectsConnectionOrderbyEnum>
  /** Whether to pad the quantity of a term's children in the quantity of each term's "count" object variable. Default false. */
  padCounts?: Maybe<Scalars['Boolean']>
  /** Parent term ID to retrieve direct-child terms of. Default empty. */
  parent?: Maybe<Scalars['Int']>
  /** Search criteria to match terms. Will be SQL-formatted with wildcards before and after. Default empty. */
  search?: Maybe<Scalars['String']>
  /** Default false. If true, only the items connected to the source item will be returned. If false, all items will be returned regardless of connection to the source */
  shouldOnlyIncludeConnectedItems?: Maybe<Scalars['Boolean']>
  /** Default false. If true, the connection will be output in a flat list instead of the hierarchical list. So child terms will be output in the same level as the parent terms */
  shouldOutputInFlatList?: Maybe<Scalars['Boolean']>
  /** Array of slugs to return term(s) for. Default empty. */
  slug?: Maybe<Array<Maybe<Scalars['String']>>>
  /** The Taxonomy to filter terms by */
  taxonomies?: Maybe<Array<Maybe<TaxonomyEnum>>>
  /** Array of term taxonomy IDs, to match when querying terms. */
  termTaxonomId?: Maybe<Array<Maybe<Scalars['ID']>>>
  /** Whether to prime meta caches for matched terms. Default true. */
  updateTermMetaCache?: Maybe<Scalars['Boolean']>
}

/** Connection between the RootQuery type and the TermNode type */
export type RootQueryToTermNodeConnection = {
  __typename?: 'RootQueryToTermNodeConnection'
  /**
   * Edges for the RootQueryToTermNodeConnection connection
   * @deprecated
   */
  edges?: Maybe<Array<Maybe<RootQueryToTermNodeConnectionEdge>>>
  /**
   * The nodes of the connection, without the edges
   * @deprecated
   */
  nodes?: Maybe<Array<Maybe<TermNode>>>
  /**
   * Information about pagination in a connection.
   * @deprecated
   */
  pageInfo?: Maybe<WpPageInfo>
}

/** An edge in a connection */
export type RootQueryToTermNodeConnectionEdge = {
  __typename?: 'RootQueryToTermNodeConnectionEdge'
  /**
   * A cursor for use in pagination
   * @deprecated
   */
  cursor?: Maybe<Scalars['String']>
  /**
   * The item at the end of the edge
   * @deprecated
   */
  node?: Maybe<TermNode>
}

/** A theme object */
export type Theme = Node & {
  __typename?: 'Theme'
  /**
   * Name of the theme author(s), could also be a company name. This field is equivalent to WP_Theme-&gt;get( &quot;Author&quot; ).
   * @deprecated
   */
  author?: Maybe<Scalars['String']>
  /**
   * URI for the author/company website. This field is equivalent to WP_Theme-&gt;get( &quot;AuthorURI&quot; ).
   * @deprecated
   */
  authorUri?: Maybe<Scalars['String']>
  /**
   * The description of the theme. This field is equivalent to WP_Theme-&gt;get( &quot;Description&quot; ).
   * @deprecated
   */
  description?: Maybe<Scalars['String']>
  /**
   * The globally unique identifier of the theme object.
   * @deprecated
   */
  id: Scalars['ID']
  /**
   * Whether the object is restricted from the current viewer
   * @deprecated
   */
  isRestricted?: Maybe<Scalars['Boolean']>
  /**
   * Display name of the theme. This field is equivalent to WP_Theme-&gt;get( &quot;Name&quot; ).
   * @deprecated
   */
  name?: Maybe<Scalars['String']>
  /**
   * The URL of the screenshot for the theme. The screenshot is intended to give an overview of what the theme looks like. This field is equivalent to WP_Theme-&gt;get_screenshot().
   * @deprecated
   */
  screenshot?: Maybe<Scalars['String']>
  /**
   * The theme slug is used to internally match themes. Theme slugs can have subdirectories like: my-theme/sub-theme. This field is equivalent to WP_Theme-&gt;get_stylesheet().
   * @deprecated
   */
  slug?: Maybe<Scalars['String']>
  /**
   * URI for the author/company website. This field is equivalent to WP_Theme-&gt;get( &quot;Tags&quot; ).
   * @deprecated
   */
  tags?: Maybe<Array<Maybe<Scalars['String']>>>
  /**
   * A URI if the theme has a website associated with it. The Theme URI is handy for directing users to a theme site for support etc. This field is equivalent to WP_Theme-&gt;get( &quot;ThemeURI&quot; ).
   * @deprecated
   */
  themeUri?: Maybe<Scalars['String']>
  /**
   * The current version of the theme. This field is equivalent to WP_Theme-&gt;get( &quot;Version&quot; ).
   * @deprecated
   */
  version?: Maybe<Scalars['Float']>
}

/** Connection between the RootQuery type and the Theme type */
export type RootQueryToThemeConnection = {
  __typename?: 'RootQueryToThemeConnection'
  /**
   * Edges for the RootQueryToThemeConnection connection
   * @deprecated
   */
  edges?: Maybe<Array<Maybe<RootQueryToThemeConnectionEdge>>>
  /**
   * The nodes of the connection, without the edges
   * @deprecated
   */
  nodes?: Maybe<Array<Maybe<Theme>>>
  /**
   * Information about pagination in a connection.
   * @deprecated
   */
  pageInfo?: Maybe<WpPageInfo>
}

/** An edge in a connection */
export type RootQueryToThemeConnectionEdge = {
  __typename?: 'RootQueryToThemeConnectionEdge'
  /**
   * A cursor for use in pagination
   * @deprecated
   */
  cursor?: Maybe<Scalars['String']>
  /**
   * The item at the end of the edge
   * @deprecated
   */
  node?: Maybe<Theme>
}

/** The Type of Identifier used to fetch a single User node. To be used along with the "id" field. Default is "ID". */
export enum UserNodeIdTypeEnum {
  /** The Database ID for the node */
  DatabaseId = 'DATABASE_ID',
  /** The Email of the User */
  Email = 'EMAIL',
  /** The hashed Global ID */
  Id = 'ID',
  /** The slug of the User */
  Slug = 'SLUG',
  /** The URI for the node */
  Uri = 'URI',
  /** The username the User uses to login with */
  Username = 'USERNAME',
}

/** Connection between the RootQuery type and the UserRole type */
export type RootQueryToUserRoleConnection = {
  __typename?: 'RootQueryToUserRoleConnection'
  /**
   * Edges for the RootQueryToUserRoleConnection connection
   * @deprecated
   */
  edges?: Maybe<Array<Maybe<RootQueryToUserRoleConnectionEdge>>>
  /**
   * The nodes of the connection, without the edges
   * @deprecated
   */
  nodes?: Maybe<Array<Maybe<UserRole>>>
  /**
   * Information about pagination in a connection.
   * @deprecated
   */
  pageInfo?: Maybe<WpPageInfo>
}

/** An edge in a connection */
export type RootQueryToUserRoleConnectionEdge = {
  __typename?: 'RootQueryToUserRoleConnectionEdge'
  /**
   * A cursor for use in pagination
   * @deprecated
   */
  cursor?: Maybe<Scalars['String']>
  /**
   * The item at the end of the edge
   * @deprecated
   */
  node?: Maybe<UserRole>
}

/** Arguments for filtering the RootQueryToUserConnection connection */
export type RootQueryToUserConnectionWhereArgs = {
  /** Array of userIds to exclude. */
  exclude?: Maybe<Array<Maybe<Scalars['Int']>>>
  /** Pass an array of post types to filter results to users who have published posts in those post types. */
  hasPublishedPosts?: Maybe<Array<Maybe<ContentTypeEnum>>>
  /** Array of userIds to include. */
  include?: Maybe<Array<Maybe<Scalars['Int']>>>
  /** The user login. */
  login?: Maybe<Scalars['String']>
  /** An array of logins to include. Users matching one of these logins will be included in results. */
  loginIn?: Maybe<Scalars['Int']>
  /** An array of logins to exclude. Users matching one of these logins will not be included in results. */
  loginNotIn?: Maybe<Scalars['Int']>
  /** The user nicename. */
  nicename?: Maybe<Scalars['String']>
  /** An array of nicenames to include. Users matching one of these nicenames will be included in results. */
  nicenameIn?: Maybe<Array<Maybe<Scalars['String']>>>
  /** An array of nicenames to exclude. Users matching one of these nicenames will not be included in results. */
  nicenameNotIn?: Maybe<Array<Maybe<Scalars['String']>>>
  /** What paramater to use to order the objects by. */
  orderby?: Maybe<Array<Maybe<UsersConnectionOrderbyInput>>>
  /** An array of role names that users must match to be included in results. Note that this is an inclusive list: users must match *each* role. */
  role?: Maybe<UserRoleEnum>
  /** An array of role names. Matched users must have at least one of these roles. */
  roleIn?: Maybe<Array<Maybe<UserRoleEnum>>>
  /** An array of role names to exclude. Users matching one or more of these roles will not be included in results. */
  roleNotIn?: Maybe<Array<Maybe<UserRoleEnum>>>
  /** Search keyword. Searches for possible string matches on columns. When "searchColumns" is left empty, it tries to determine which column to search in based on search string. */
  search?: Maybe<Scalars['String']>
  /** Array of column names to be searched. Accepts 'ID', 'login', 'nicename', 'email', 'url'. */
  searchColumns?: Maybe<Array<Maybe<Scalars['String']>>>
}

/** Options for ordering the connection */
export type UsersConnectionOrderbyInput = {
  field: UsersConnectionOrderbyEnum
  order?: Maybe<OrderEnum>
}

/** Field to order the connection by */
export enum UsersConnectionOrderbyEnum {
  /** Order by display name */
  DisplayName = 'DISPLAY_NAME',
  /** Order by email address */
  Email = 'EMAIL',
  /** Order by login */
  Login = 'LOGIN',
  /** Preserve the login order given in the LOGIN_IN array */
  LoginIn = 'LOGIN_IN',
  /** Order by nice name */
  NiceName = 'NICE_NAME',
  /** Preserve the nice name order given in the NICE_NAME_IN array */
  NiceNameIn = 'NICE_NAME_IN',
  /** Order by registration date */
  Registered = 'REGISTERED',
  /** Order by URL */
  Url = 'URL',
}

/** Names of available user roles */
export enum UserRoleEnum {
  Administrator = 'ADMINISTRATOR',
  Author = 'AUTHOR',
  Contributor = 'CONTRIBUTOR',
  Editor = 'EDITOR',
  Subscriber = 'SUBSCRIBER',
}

/** Connection between the RootQuery type and the User type */
export type RootQueryToUserConnection = {
  __typename?: 'RootQueryToUserConnection'
  /**
   * Edges for the RootQueryToUserConnection connection
   * @deprecated
   */
  edges?: Maybe<Array<Maybe<RootQueryToUserConnectionEdge>>>
  /**
   * The nodes of the connection, without the edges
   * @deprecated
   */
  nodes?: Maybe<Array<Maybe<User>>>
  /**
   * Information about pagination in a connection.
   * @deprecated
   */
  pageInfo?: Maybe<WpPageInfo>
}

/** An edge in a connection */
export type RootQueryToUserConnectionEdge = {
  __typename?: 'RootQueryToUserConnectionEdge'
  /**
   * A cursor for use in pagination
   * @deprecated
   */
  cursor?: Maybe<Scalars['String']>
  /**
   * The item at the end of the edge
   * @deprecated
   */
  node?: Maybe<User>
}

/** The writing setting type */
export type WritingSettings = {
  __typename?: 'WritingSettings'
  /**
   * Default post category.
   * @deprecated
   */
  defaultCategory?: Maybe<Scalars['Int']>
  /**
   * Default post format.
   * @deprecated
   */
  defaultPostFormat?: Maybe<Scalars['String']>
  /**
   * Convert emoticons like :-) and :-P to graphics on display.
   * @deprecated
   */
  useSmilies?: Maybe<Scalars['Boolean']>
}

/** The root mutation */
export type RootMutation = {
  __typename?: 'RootMutation'
  /**
   * The payload for the UpdateCategory mutation
   * @deprecated
   */
  updateCategory?: Maybe<UpdateCategoryPayload>
  /**
   * The payload for the UpdatePostFormat mutation
   * @deprecated
   */
  updatePostFormat?: Maybe<UpdatePostFormatPayload>
  /**
   * The payload for the UpdateTag mutation
   * @deprecated
   */
  updateTag?: Maybe<UpdateTagPayload>
  /**
   * The payload for the createCategory mutation
   * @deprecated
   */
  createCategory?: Maybe<CreateCategoryPayload>
  /**
   * The payload for the createComment mutation
   * @deprecated
   */
  createComment?: Maybe<CreateCommentPayload>
  /**
   * The payload for the createMediaItem mutation
   * @deprecated
   */
  createMediaItem?: Maybe<CreateMediaItemPayload>
  /**
   * The payload for the createPage mutation
   * @deprecated
   */
  createPage?: Maybe<CreatePagePayload>
  /**
   * The payload for the createPost mutation
   * @deprecated
   */
  createPost?: Maybe<CreatePostPayload>
  /**
   * The payload for the createPostFormat mutation
   * @deprecated
   */
  createPostFormat?: Maybe<CreatePostFormatPayload>
  /**
   * The payload for the createTag mutation
   * @deprecated
   */
  createTag?: Maybe<CreateTagPayload>
  /**
   * The payload for the createUser mutation
   * @deprecated
   */
  createUser?: Maybe<CreateUserPayload>
  /**
   * The payload for the deleteCategory mutation
   * @deprecated
   */
  deleteCategory?: Maybe<DeleteCategoryPayload>
  /**
   * The payload for the deleteComment mutation
   * @deprecated
   */
  deleteComment?: Maybe<DeleteCommentPayload>
  /**
   * The payload for the deleteMediaItem mutation
   * @deprecated
   */
  deleteMediaItem?: Maybe<DeleteMediaItemPayload>
  /**
   * The payload for the deletePage mutation
   * @deprecated
   */
  deletePage?: Maybe<DeletePagePayload>
  /**
   * The payload for the deletePost mutation
   * @deprecated
   */
  deletePost?: Maybe<DeletePostPayload>
  /**
   * The payload for the deletePostFormat mutation
   * @deprecated
   */
  deletePostFormat?: Maybe<DeletePostFormatPayload>
  /**
   * The payload for the deleteTag mutation
   * @deprecated
   */
  deleteTag?: Maybe<DeleteTagPayload>
  /**
   * The payload for the deleteUser mutation
   * @deprecated
   */
  deleteUser?: Maybe<DeleteUserPayload>
  /** @deprecated  */
  increaseCount?: Maybe<Scalars['Int']>
  /**
   * The payload for the login mutation
   * @deprecated
   */
  login?: Maybe<LoginPayload>
  /**
   * The payload for the refreshJwtAuthToken mutation
   * @deprecated
   */
  refreshJwtAuthToken?: Maybe<RefreshJwtAuthTokenPayload>
  /**
   * The payload for the registerUser mutation
   * @deprecated
   */
  registerUser?: Maybe<RegisterUserPayload>
  /**
   * The payload for the resetUserPassword mutation
   * @deprecated
   */
  resetUserPassword?: Maybe<ResetUserPasswordPayload>
  /**
   * The payload for the restoreComment mutation
   * @deprecated
   */
  restoreComment?: Maybe<RestoreCommentPayload>
  /**
   * The payload for the sendPasswordResetEmail mutation
   * @deprecated
   */
  sendPasswordResetEmail?: Maybe<SendPasswordResetEmailPayload>
  /**
   * The payload for the updateComment mutation
   * @deprecated
   */
  updateComment?: Maybe<UpdateCommentPayload>
  /**
   * The payload for the updateMediaItem mutation
   * @deprecated
   */
  updateMediaItem?: Maybe<UpdateMediaItemPayload>
  /**
   * The payload for the updatePage mutation
   * @deprecated
   */
  updatePage?: Maybe<UpdatePagePayload>
  /**
   * The payload for the updatePost mutation
   * @deprecated
   */
  updatePost?: Maybe<UpdatePostPayload>
  /**
   * The payload for the updateSettings mutation
   * @deprecated
   */
  updateSettings?: Maybe<UpdateSettingsPayload>
  /**
   * The payload for the updateUser mutation
   * @deprecated
   */
  updateUser?: Maybe<UpdateUserPayload>
}

/** The root mutation */
export type RootMutationUpdateCategoryArgs = {
  input: UpdateCategoryInput
}

/** The root mutation */
export type RootMutationUpdatePostFormatArgs = {
  input: UpdatePostFormatInput
}

/** The root mutation */
export type RootMutationUpdateTagArgs = {
  input: UpdateTagInput
}

/** The root mutation */
export type RootMutationCreateCategoryArgs = {
  input: CreateCategoryInput
}

/** The root mutation */
export type RootMutationCreateCommentArgs = {
  input: CreateCommentInput
}

/** The root mutation */
export type RootMutationCreateMediaItemArgs = {
  input: CreateMediaItemInput
}

/** The root mutation */
export type RootMutationCreatePageArgs = {
  input: CreatePageInput
}

/** The root mutation */
export type RootMutationCreatePostArgs = {
  input: CreatePostInput
}

/** The root mutation */
export type RootMutationCreatePostFormatArgs = {
  input: CreatePostFormatInput
}

/** The root mutation */
export type RootMutationCreateTagArgs = {
  input: CreateTagInput
}

/** The root mutation */
export type RootMutationCreateUserArgs = {
  input: CreateUserInput
}

/** The root mutation */
export type RootMutationDeleteCategoryArgs = {
  input: DeleteCategoryInput
}

/** The root mutation */
export type RootMutationDeleteCommentArgs = {
  input: DeleteCommentInput
}

/** The root mutation */
export type RootMutationDeleteMediaItemArgs = {
  input: DeleteMediaItemInput
}

/** The root mutation */
export type RootMutationDeletePageArgs = {
  input: DeletePageInput
}

/** The root mutation */
export type RootMutationDeletePostArgs = {
  input: DeletePostInput
}

/** The root mutation */
export type RootMutationDeletePostFormatArgs = {
  input: DeletePostFormatInput
}

/** The root mutation */
export type RootMutationDeleteTagArgs = {
  input: DeleteTagInput
}

/** The root mutation */
export type RootMutationDeleteUserArgs = {
  input: DeleteUserInput
}

/** The root mutation */
export type RootMutationIncreaseCountArgs = {
  count?: Maybe<Scalars['Int']>
}

/** The root mutation */
export type RootMutationLoginArgs = {
  input: LoginInput
}

/** The root mutation */
export type RootMutationRefreshJwtAuthTokenArgs = {
  input: RefreshJwtAuthTokenInput
}

/** The root mutation */
export type RootMutationRegisterUserArgs = {
  input: RegisterUserInput
}

/** The root mutation */
export type RootMutationResetUserPasswordArgs = {
  input: ResetUserPasswordInput
}

/** The root mutation */
export type RootMutationRestoreCommentArgs = {
  input: RestoreCommentInput
}

/** The root mutation */
export type RootMutationSendPasswordResetEmailArgs = {
  input: SendPasswordResetEmailInput
}

/** The root mutation */
export type RootMutationUpdateCommentArgs = {
  input: UpdateCommentInput
}

/** The root mutation */
export type RootMutationUpdateMediaItemArgs = {
  input: UpdateMediaItemInput
}

/** The root mutation */
export type RootMutationUpdatePageArgs = {
  input: UpdatePageInput
}

/** The root mutation */
export type RootMutationUpdatePostArgs = {
  input: UpdatePostInput
}

/** The root mutation */
export type RootMutationUpdateSettingsArgs = {
  input: UpdateSettingsInput
}

/** The root mutation */
export type RootMutationUpdateUserArgs = {
  input: UpdateUserInput
}

/** Input for the UpdateCategory mutation */
export type UpdateCategoryInput = {
  /** The slug that the category will be an alias of */
  aliasOf?: Maybe<Scalars['String']>
  clientMutationId: Scalars['String']
  /** The description of the category object */
  description?: Maybe<Scalars['String']>
  /** The ID of the category object to update */
  id: Scalars['ID']
  /** The name of the category object to mutate */
  name?: Maybe<Scalars['String']>
  /** The ID of the category that should be set as the parent */
  parentId?: Maybe<Scalars['ID']>
  /** If this argument exists then the slug will be checked to see if it is not an existing valid term. If that check succeeds (it is not a valid term), then it is added and the term id is given. If it fails, then a check is made to whether the taxonomy is hierarchical and the parent argument is not empty. If the second check succeeds, the term will be inserted and the term id will be given. If the slug argument is empty, then it will be calculated from the term name. */
  slug?: Maybe<Scalars['String']>
}

/** The payload for the UpdateCategory mutation */
export type UpdateCategoryPayload = {
  __typename?: 'UpdateCategoryPayload'
  /**
   * The created category
   * @deprecated
   */
  category?: Maybe<Category>
  /** @deprecated  */
  clientMutationId: Scalars['String']
}

/** Input for the UpdatePostFormat mutation */
export type UpdatePostFormatInput = {
  /** The slug that the post_format will be an alias of */
  aliasOf?: Maybe<Scalars['String']>
  clientMutationId: Scalars['String']
  /** The description of the post_format object */
  description?: Maybe<Scalars['String']>
  /** The ID of the postFormat object to update */
  id: Scalars['ID']
  /** The name of the post_format object to mutate */
  name?: Maybe<Scalars['String']>
  /** If this argument exists then the slug will be checked to see if it is not an existing valid term. If that check succeeds (it is not a valid term), then it is added and the term id is given. If it fails, then a check is made to whether the taxonomy is hierarchical and the parent argument is not empty. If the second check succeeds, the term will be inserted and the term id will be given. If the slug argument is empty, then it will be calculated from the term name. */
  slug?: Maybe<Scalars['String']>
}

/** The payload for the UpdatePostFormat mutation */
export type UpdatePostFormatPayload = {
  __typename?: 'UpdatePostFormatPayload'
  /** @deprecated  */
  clientMutationId: Scalars['String']
  /**
   * The created post_format
   * @deprecated
   */
  postFormat?: Maybe<PostFormat>
}

/** Input for the UpdateTag mutation */
export type UpdateTagInput = {
  /** The slug that the post_tag will be an alias of */
  aliasOf?: Maybe<Scalars['String']>
  clientMutationId: Scalars['String']
  /** The description of the post_tag object */
  description?: Maybe<Scalars['String']>
  /** The ID of the tag object to update */
  id: Scalars['ID']
  /** The name of the post_tag object to mutate */
  name?: Maybe<Scalars['String']>
  /** If this argument exists then the slug will be checked to see if it is not an existing valid term. If that check succeeds (it is not a valid term), then it is added and the term id is given. If it fails, then a check is made to whether the taxonomy is hierarchical and the parent argument is not empty. If the second check succeeds, the term will be inserted and the term id will be given. If the slug argument is empty, then it will be calculated from the term name. */
  slug?: Maybe<Scalars['String']>
}

/** The payload for the UpdateTag mutation */
export type UpdateTagPayload = {
  __typename?: 'UpdateTagPayload'
  /** @deprecated  */
  clientMutationId: Scalars['String']
  /**
   * The created post_tag
   * @deprecated
   */
  tag?: Maybe<Tag>
}

/** Input for the createCategory mutation */
export type CreateCategoryInput = {
  /** The slug that the category will be an alias of */
  aliasOf?: Maybe<Scalars['String']>
  clientMutationId: Scalars['String']
  /** The description of the category object */
  description?: Maybe<Scalars['String']>
  /** The name of the category object to mutate */
  name: Scalars['String']
  /** The ID of the category that should be set as the parent */
  parentId?: Maybe<Scalars['ID']>
  /** If this argument exists then the slug will be checked to see if it is not an existing valid term. If that check succeeds (it is not a valid term), then it is added and the term id is given. If it fails, then a check is made to whether the taxonomy is hierarchical and the parent argument is not empty. If the second check succeeds, the term will be inserted and the term id will be given. If the slug argument is empty, then it will be calculated from the term name. */
  slug?: Maybe<Scalars['String']>
}

/** The payload for the createCategory mutation */
export type CreateCategoryPayload = {
  __typename?: 'CreateCategoryPayload'
  /**
   * The created category
   * @deprecated
   */
  category?: Maybe<Category>
  /** @deprecated  */
  clientMutationId: Scalars['String']
}

/** Input for the createComment mutation */
export type CreateCommentInput = {
  /** User agent used to post the comment. */
  agent?: Maybe<Scalars['String']>
  /** The approval status of the comment. */
  approved?: Maybe<Scalars['String']>
  /** The name of the comment's author. */
  author?: Maybe<Scalars['String']>
  /** The email of the comment's author. */
  authorEmail?: Maybe<Scalars['String']>
  /** IP address for the comment's author. */
  authorIp?: Maybe<Scalars['String']>
  /** The url of the comment's author. */
  authorUrl?: Maybe<Scalars['String']>
  clientMutationId: Scalars['String']
  /** The ID of the post object the comment belongs to. */
  commentOn?: Maybe<Scalars['Int']>
  /** Content of the comment. */
  content?: Maybe<Scalars['String']>
  /** The date of the object. Preferable to enter as year/month/day ( e.g. 01/31/2017 ) as it will rearrange date as fit if it is not specified. Incomplete dates may have unintended results for example, "2017" as the input will use current date with timestamp 20:17  */
  date?: Maybe<Scalars['String']>
  /** Parent comment of current comment. */
  parent?: Maybe<Scalars['ID']>
  /** Type of comment. */
  type?: Maybe<Scalars['String']>
  /** The userID of the comment's author. */
  userId?: Maybe<Scalars['Int']>
}

/** The payload for the createComment mutation */
export type CreateCommentPayload = {
  __typename?: 'CreateCommentPayload'
  /** @deprecated  */
  clientMutationId: Scalars['String']
  /**
   * The comment that was created
   * @deprecated
   */
  comment?: Maybe<Comment>
  /**
   * Whether the mutation succeeded. If the comment is not approved, the server will not return the comment to a non authenticated user, but a success message can be returned if the create succeeded, and the client can optimistically add the comment to the client cache
   * @deprecated
   */
  success?: Maybe<Scalars['Boolean']>
}

/** Input for the createMediaItem mutation */
export type CreateMediaItemInput = {
  /** Alternative text to display when mediaItem is not displayed */
  altText?: Maybe<Scalars['String']>
  /** The userId to assign as the author of the mediaItem */
  authorId?: Maybe<Scalars['ID']>
  /** The caption for the mediaItem */
  caption?: Maybe<Scalars['String']>
  clientMutationId: Scalars['String']
  /** The comment status for the mediaItem */
  commentStatus?: Maybe<Scalars['String']>
  /** The date of the mediaItem */
  date?: Maybe<Scalars['String']>
  /** The date (in GMT zone) of the mediaItem */
  dateGmt?: Maybe<Scalars['String']>
  /** Description of the mediaItem */
  description?: Maybe<Scalars['String']>
  /** The file name of the mediaItem */
  filePath?: Maybe<Scalars['String']>
  /** The file type of the mediaItem */
  fileType?: Maybe<MimeTypeEnum>
  /** The WordPress post ID or the graphQL postId of the parent object */
  parentId?: Maybe<Scalars['ID']>
  /** The ping status for the mediaItem */
  pingStatus?: Maybe<Scalars['String']>
  /** The slug of the mediaItem */
  slug?: Maybe<Scalars['String']>
  /** The status of the mediaItem */
  status?: Maybe<MediaItemStatusEnum>
  /** The title of the mediaItem */
  title?: Maybe<Scalars['String']>
}

/** The status of the media item object. */
export enum MediaItemStatusEnum {
  /** Objects with the auto-draft status */
  AutoDraft = 'AUTO_DRAFT',
  /** Objects with the inherit status */
  Inherit = 'INHERIT',
  /** Objects with the private status */
  Private = 'PRIVATE',
  /** Objects with the trash status */
  Trash = 'TRASH',
}

/** The payload for the createMediaItem mutation */
export type CreateMediaItemPayload = {
  __typename?: 'CreateMediaItemPayload'
  /** @deprecated  */
  clientMutationId: Scalars['String']
  /** @deprecated  */
  mediaItem?: Maybe<MediaItem>
}

/** Input for the createPage mutation */
export type CreatePageInput = {
  /** The userId to assign as the author of the object */
  authorId?: Maybe<Scalars['ID']>
  clientMutationId: Scalars['String']
  /** The comment status for the object */
  commentStatus?: Maybe<Scalars['String']>
  /** The content of the object */
  content?: Maybe<Scalars['String']>
  /** The date of the object. Preferable to enter as year/month/day (e.g. 01/31/2017) as it will rearrange date as fit if it is not specified. Incomplete dates may have unintended results for example, "2017" as the input will use current date with timestamp 20:17  */
  date?: Maybe<Scalars['String']>
  /** A field used for ordering posts. This is typically used with nav menu items or for special ordering of hierarchical content types. */
  menuOrder?: Maybe<Scalars['Int']>
  /** The ID of the parent object */
  parentId?: Maybe<Scalars['ID']>
  /** The password used to protect the content of the object */
  password?: Maybe<Scalars['String']>
  /** The slug of the object */
  slug?: Maybe<Scalars['String']>
  /** The status of the object */
  status?: Maybe<PostStatusEnum>
  /** The title of the object */
  title?: Maybe<Scalars['String']>
}

/** The payload for the createPage mutation */
export type CreatePagePayload = {
  __typename?: 'CreatePagePayload'
  /** @deprecated  */
  clientMutationId: Scalars['String']
  /** @deprecated  */
  page?: Maybe<Page>
}

/** Input for the createPost mutation */
export type CreatePostInput = {
  /** The userId to assign as the author of the object */
  authorId?: Maybe<Scalars['ID']>
  /** Set connections between the post and categories */
  categories?: Maybe<PostCategoriesInput>
  clientMutationId: Scalars['String']
  /** The comment status for the object */
  commentStatus?: Maybe<Scalars['String']>
  /** The content of the object */
  content?: Maybe<Scalars['String']>
  /** The date of the object. Preferable to enter as year/month/day (e.g. 01/31/2017) as it will rearrange date as fit if it is not specified. Incomplete dates may have unintended results for example, "2017" as the input will use current date with timestamp 20:17  */
  date?: Maybe<Scalars['String']>
  /** The excerpt of the object */
  excerpt?: Maybe<Scalars['String']>
  /** A field used for ordering posts. This is typically used with nav menu items or for special ordering of hierarchical content types. */
  menuOrder?: Maybe<Scalars['Int']>
  /** The password used to protect the content of the object */
  password?: Maybe<Scalars['String']>
  /** The ping status for the object */
  pingStatus?: Maybe<Scalars['String']>
  /** URLs that have been pinged. */
  pinged?: Maybe<Array<Maybe<Scalars['String']>>>
  /** Set connections between the post and postFormats */
  postFormats?: Maybe<PostPostFormatsInput>
  /** The slug of the object */
  slug?: Maybe<Scalars['String']>
  /** The status of the object */
  status?: Maybe<PostStatusEnum>
  /** Set connections between the post and tags */
  tags?: Maybe<PostTagsInput>
  /** The title of the object */
  title?: Maybe<Scalars['String']>
  /** URLs queued to be pinged. */
  toPing?: Maybe<Array<Maybe<Scalars['String']>>>
}

/** Set relationships between the post to categories */
export type PostCategoriesInput = {
  /** If true, this will append the category to existing related categories. If false, this will replace existing relationships. Default true. */
  append?: Maybe<Scalars['Boolean']>
  nodes?: Maybe<Array<Maybe<PostCategoriesNodeInput>>>
}

/** List of categories to connect the post to. If an ID is set, it will be used to create the connection. If not, it will look for a slug. If neither are valid existing terms, and the site is configured to allow terms to be created during post mutations, a term will be created using the Name if it exists in the input, then fallback to the slug if it exists. */
export type PostCategoriesNodeInput = {
  /** The description of the category. This field is used to set a description of the category if a new one is created during the mutation. */
  description?: Maybe<Scalars['String']>
  /** The ID of the category. If present, this will be used to connect to the post. If no existing category exists with this ID, no connection will be made. */
  id?: Maybe<Scalars['ID']>
  /** The name of the category. This field is used to create a new term, if term creation is enabled in nested mutations, and if one does not already exist with the provided slug or ID or if a slug or ID is not provided. If no name is included and a term is created, the creation will fallback to the slug field. */
  name?: Maybe<Scalars['String']>
  /** The slug of the category. If no ID is present, this field will be used to make a connection. If no existing term exists with this slug, this field will be used as a fallback to the Name field when creating a new term to connect to, if term creation is enabled as a nested mutation. */
  slug?: Maybe<Scalars['String']>
}

/** Set relationships between the post to postFormats */
export type PostPostFormatsInput = {
  /** If true, this will append the postFormat to existing related postFormats. If false, this will replace existing relationships. Default true. */
  append?: Maybe<Scalars['Boolean']>
  nodes?: Maybe<Array<Maybe<PostPostFormatsNodeInput>>>
}

/** List of postFormats to connect the post to. If an ID is set, it will be used to create the connection. If not, it will look for a slug. If neither are valid existing terms, and the site is configured to allow terms to be created during post mutations, a term will be created using the Name if it exists in the input, then fallback to the slug if it exists. */
export type PostPostFormatsNodeInput = {
  /** The description of the postFormat. This field is used to set a description of the postFormat if a new one is created during the mutation. */
  description?: Maybe<Scalars['String']>
  /** The ID of the postFormat. If present, this will be used to connect to the post. If no existing postFormat exists with this ID, no connection will be made. */
  id?: Maybe<Scalars['ID']>
  /** The name of the postFormat. This field is used to create a new term, if term creation is enabled in nested mutations, and if one does not already exist with the provided slug or ID or if a slug or ID is not provided. If no name is included and a term is created, the creation will fallback to the slug field. */
  name?: Maybe<Scalars['String']>
  /** The slug of the postFormat. If no ID is present, this field will be used to make a connection. If no existing term exists with this slug, this field will be used as a fallback to the Name field when creating a new term to connect to, if term creation is enabled as a nested mutation. */
  slug?: Maybe<Scalars['String']>
}

/** Set relationships between the post to tags */
export type PostTagsInput = {
  /** If true, this will append the tag to existing related tags. If false, this will replace existing relationships. Default true. */
  append?: Maybe<Scalars['Boolean']>
  nodes?: Maybe<Array<Maybe<PostTagsNodeInput>>>
}

/** List of tags to connect the post to. If an ID is set, it will be used to create the connection. If not, it will look for a slug. If neither are valid existing terms, and the site is configured to allow terms to be created during post mutations, a term will be created using the Name if it exists in the input, then fallback to the slug if it exists. */
export type PostTagsNodeInput = {
  /** The description of the tag. This field is used to set a description of the tag if a new one is created during the mutation. */
  description?: Maybe<Scalars['String']>
  /** The ID of the tag. If present, this will be used to connect to the post. If no existing tag exists with this ID, no connection will be made. */
  id?: Maybe<Scalars['ID']>
  /** The name of the tag. This field is used to create a new term, if term creation is enabled in nested mutations, and if one does not already exist with the provided slug or ID or if a slug or ID is not provided. If no name is included and a term is created, the creation will fallback to the slug field. */
  name?: Maybe<Scalars['String']>
  /** The slug of the tag. If no ID is present, this field will be used to make a connection. If no existing term exists with this slug, this field will be used as a fallback to the Name field when creating a new term to connect to, if term creation is enabled as a nested mutation. */
  slug?: Maybe<Scalars['String']>
}

/** The payload for the createPost mutation */
export type CreatePostPayload = {
  __typename?: 'CreatePostPayload'
  /** @deprecated  */
  clientMutationId: Scalars['String']
  /** @deprecated  */
  post?: Maybe<Post>
}

/** Input for the createPostFormat mutation */
export type CreatePostFormatInput = {
  /** The slug that the post_format will be an alias of */
  aliasOf?: Maybe<Scalars['String']>
  clientMutationId: Scalars['String']
  /** The description of the post_format object */
  description?: Maybe<Scalars['String']>
  /** The name of the post_format object to mutate */
  name: Scalars['String']
  /** If this argument exists then the slug will be checked to see if it is not an existing valid term. If that check succeeds (it is not a valid term), then it is added and the term id is given. If it fails, then a check is made to whether the taxonomy is hierarchical and the parent argument is not empty. If the second check succeeds, the term will be inserted and the term id will be given. If the slug argument is empty, then it will be calculated from the term name. */
  slug?: Maybe<Scalars['String']>
}

/** The payload for the createPostFormat mutation */
export type CreatePostFormatPayload = {
  __typename?: 'CreatePostFormatPayload'
  /** @deprecated  */
  clientMutationId: Scalars['String']
  /**
   * The created post_format
   * @deprecated
   */
  postFormat?: Maybe<PostFormat>
}

/** Input for the createTag mutation */
export type CreateTagInput = {
  /** The slug that the post_tag will be an alias of */
  aliasOf?: Maybe<Scalars['String']>
  clientMutationId: Scalars['String']
  /** The description of the post_tag object */
  description?: Maybe<Scalars['String']>
  /** The name of the post_tag object to mutate */
  name: Scalars['String']
  /** If this argument exists then the slug will be checked to see if it is not an existing valid term. If that check succeeds (it is not a valid term), then it is added and the term id is given. If it fails, then a check is made to whether the taxonomy is hierarchical and the parent argument is not empty. If the second check succeeds, the term will be inserted and the term id will be given. If the slug argument is empty, then it will be calculated from the term name. */
  slug?: Maybe<Scalars['String']>
}

/** The payload for the createTag mutation */
export type CreateTagPayload = {
  __typename?: 'CreateTagPayload'
  /** @deprecated  */
  clientMutationId: Scalars['String']
  /**
   * The created post_tag
   * @deprecated
   */
  tag?: Maybe<Tag>
}

/** Input for the createUser mutation */
export type CreateUserInput = {
  /** User's AOL IM account. */
  aim?: Maybe<Scalars['String']>
  clientMutationId: Scalars['String']
  /** A string containing content about the user. */
  description?: Maybe<Scalars['String']>
  /** A string that will be shown on the site. Defaults to user's username. It is likely that you will want to change this, for both appearance and security through obscurity (that is if you dont use and delete the default admin user). */
  displayName?: Maybe<Scalars['String']>
  /** A string containing the user's email address. */
  email?: Maybe<Scalars['String']>
  /** 	The user's first name. */
  firstName?: Maybe<Scalars['String']>
  /** User's Jabber account. */
  jabber?: Maybe<Scalars['String']>
  /** The user's last name. */
  lastName?: Maybe<Scalars['String']>
  /** User's locale. */
  locale?: Maybe<Scalars['String']>
  /** A string that contains a URL-friendly name for the user. The default is the user's username. */
  nicename?: Maybe<Scalars['String']>
  /** The user's nickname, defaults to the user's username. */
  nickname?: Maybe<Scalars['String']>
  /** A string that contains the plain text password for the user. */
  password?: Maybe<Scalars['String']>
  /** If true, this will refresh the users JWT secret. */
  refreshJwtUserSecret?: Maybe<Scalars['Boolean']>
  /** The date the user registered. Format is Y-m-d H:i:s. */
  registered?: Maybe<Scalars['String']>
  /** If true, this will revoke the users JWT secret. If false, this will unrevoke the JWT secret AND issue a new one. To revoke, the user must have proper capabilities to edit users JWT secrets. */
  revokeJwtUserSecret?: Maybe<Scalars['Boolean']>
  /** A string for whether to enable the rich editor or not. False if not empty. */
  richEditing?: Maybe<Scalars['String']>
  /** An array of roles to be assigned to the user. */
  roles?: Maybe<Array<Maybe<Scalars['String']>>>
  /** A string that contains the user's username for logging in. */
  username: Scalars['String']
  /** A string containing the user's URL for the user's web site. */
  websiteUrl?: Maybe<Scalars['String']>
  /** User's Yahoo IM account. */
  yim?: Maybe<Scalars['String']>
}

/** The payload for the createUser mutation */
export type CreateUserPayload = {
  __typename?: 'CreateUserPayload'
  /** @deprecated  */
  clientMutationId: Scalars['String']
  /** @deprecated  */
  user?: Maybe<User>
}

/** Input for the deleteCategory mutation */
export type DeleteCategoryInput = {
  clientMutationId: Scalars['String']
  /** The ID of the category to delete */
  id: Scalars['ID']
}

/** The payload for the deleteCategory mutation */
export type DeleteCategoryPayload = {
  __typename?: 'DeleteCategoryPayload'
  /**
   * The deteted term object
   * @deprecated
   */
  category?: Maybe<Category>
  /** @deprecated  */
  clientMutationId: Scalars['String']
  /**
   * The ID of the deleted object
   * @deprecated
   */
  deletedId?: Maybe<Scalars['ID']>
}

/** Input for the deleteComment mutation */
export type DeleteCommentInput = {
  clientMutationId: Scalars['String']
  /** Whether the comment should be force deleted instead of being moved to the trash */
  forceDelete?: Maybe<Scalars['Boolean']>
  /** The deleted comment ID */
  id: Scalars['ID']
}

/** The payload for the deleteComment mutation */
export type DeleteCommentPayload = {
  __typename?: 'DeleteCommentPayload'
  /** @deprecated  */
  clientMutationId: Scalars['String']
  /**
   * The deleted comment object
   * @deprecated
   */
  comment?: Maybe<Comment>
  /**
   * The deleted comment ID
   * @deprecated
   */
  deletedId?: Maybe<Scalars['ID']>
}

/** Input for the deleteMediaItem mutation */
export type DeleteMediaItemInput = {
  clientMutationId: Scalars['String']
  /** Whether the mediaItem should be force deleted instead of being moved to the trash */
  forceDelete?: Maybe<Scalars['Boolean']>
  /** The ID of the mediaItem to delete */
  id: Scalars['ID']
}

/** The payload for the deleteMediaItem mutation */
export type DeleteMediaItemPayload = {
  __typename?: 'DeleteMediaItemPayload'
  /** @deprecated  */
  clientMutationId: Scalars['String']
  /**
   * The ID of the deleted mediaItem
   * @deprecated
   */
  deletedId?: Maybe<Scalars['ID']>
  /**
   * The mediaItem before it was deleted
   * @deprecated
   */
  mediaItem?: Maybe<MediaItem>
}

/** Input for the deletePage mutation */
export type DeletePageInput = {
  clientMutationId: Scalars['String']
  /** Whether the object should be force deleted instead of being moved to the trash */
  forceDelete?: Maybe<Scalars['Boolean']>
  /** The ID of the page to delete */
  id: Scalars['ID']
}

/** The payload for the deletePage mutation */
export type DeletePagePayload = {
  __typename?: 'DeletePagePayload'
  /** @deprecated  */
  clientMutationId: Scalars['String']
  /**
   * The ID of the deleted object
   * @deprecated
   */
  deletedId?: Maybe<Scalars['ID']>
  /**
   * The object before it was deleted
   * @deprecated
   */
  page?: Maybe<Page>
}

/** Input for the deletePost mutation */
export type DeletePostInput = {
  clientMutationId: Scalars['String']
  /** Whether the object should be force deleted instead of being moved to the trash */
  forceDelete?: Maybe<Scalars['Boolean']>
  /** The ID of the post to delete */
  id: Scalars['ID']
}

/** The payload for the deletePost mutation */
export type DeletePostPayload = {
  __typename?: 'DeletePostPayload'
  /** @deprecated  */
  clientMutationId: Scalars['String']
  /**
   * The ID of the deleted object
   * @deprecated
   */
  deletedId?: Maybe<Scalars['ID']>
  /**
   * The object before it was deleted
   * @deprecated
   */
  post?: Maybe<Post>
}

/** Input for the deletePostFormat mutation */
export type DeletePostFormatInput = {
  clientMutationId: Scalars['String']
  /** The ID of the postFormat to delete */
  id: Scalars['ID']
}

/** The payload for the deletePostFormat mutation */
export type DeletePostFormatPayload = {
  __typename?: 'DeletePostFormatPayload'
  /** @deprecated  */
  clientMutationId: Scalars['String']
  /**
   * The ID of the deleted object
   * @deprecated
   */
  deletedId?: Maybe<Scalars['ID']>
  /**
   * The deteted term object
   * @deprecated
   */
  postFormat?: Maybe<PostFormat>
}

/** Input for the deleteTag mutation */
export type DeleteTagInput = {
  clientMutationId: Scalars['String']
  /** The ID of the tag to delete */
  id: Scalars['ID']
}

/** The payload for the deleteTag mutation */
export type DeleteTagPayload = {
  __typename?: 'DeleteTagPayload'
  /** @deprecated  */
  clientMutationId: Scalars['String']
  /**
   * The ID of the deleted object
   * @deprecated
   */
  deletedId?: Maybe<Scalars['ID']>
  /**
   * The deteted term object
   * @deprecated
   */
  tag?: Maybe<Tag>
}

/** Input for the deleteUser mutation */
export type DeleteUserInput = {
  clientMutationId: Scalars['String']
  /** The ID of the user you want to delete */
  id: Scalars['ID']
  /** Reassign posts and links to new User ID. */
  reassignId?: Maybe<Scalars['ID']>
}

/** The payload for the deleteUser mutation */
export type DeleteUserPayload = {
  __typename?: 'DeleteUserPayload'
  /** @deprecated  */
  clientMutationId: Scalars['String']
  /**
   * The ID of the user that you just deleted
   * @deprecated
   */
  deletedId?: Maybe<Scalars['ID']>
  /**
   * The deleted user object
   * @deprecated
   */
  user?: Maybe<User>
}

/** Input for the login mutation */
export type LoginInput = {
  clientMutationId: Scalars['String']
  /** The plain-text password for the user logging in. */
  password: Scalars['String']
  /** The username used for login. Typically a unique or email address depending on specific configuration */
  username: Scalars['String']
}

/** The payload for the login mutation */
export type LoginPayload = {
  __typename?: 'LoginPayload'
  /**
   * JWT Token that can be used in future requests for Authentication
   * @deprecated
   */
  authToken?: Maybe<Scalars['String']>
  /** @deprecated  */
  clientMutationId: Scalars['String']
  /**
   * A JWT token that can be used in future requests to get a refreshed jwtAuthToken. If the refresh token used in a request is revoked or otherwise invalid, a valid Auth token will NOT be issued in the response headers.
   * @deprecated
   */
  refreshToken?: Maybe<Scalars['String']>
  /**
   * The user that was logged in
   * @deprecated
   */
  user?: Maybe<User>
}

/** Input for the refreshJwtAuthToken mutation */
export type RefreshJwtAuthTokenInput = {
  clientMutationId: Scalars['String']
  /** A valid, previously issued JWT refresh token. If valid a new Auth token will be provided. If invalid, expired, revoked or otherwise invalid, a new AuthToken will not be provided. */
  jwtRefreshToken: Scalars['String']
}

/** The payload for the refreshJwtAuthToken mutation */
export type RefreshJwtAuthTokenPayload = {
  __typename?: 'RefreshJwtAuthTokenPayload'
  /**
   * JWT Token that can be used in future requests for Authentication
   * @deprecated
   */
  authToken?: Maybe<Scalars['String']>
  /** @deprecated  */
  clientMutationId: Scalars['String']
}

/** Input for the registerUser mutation */
export type RegisterUserInput = {
  /** User's AOL IM account. */
  aim?: Maybe<Scalars['String']>
  clientMutationId: Scalars['String']
  /** A string containing content about the user. */
  description?: Maybe<Scalars['String']>
  /** A string that will be shown on the site. Defaults to user's username. It is likely that you will want to change this, for both appearance and security through obscurity (that is if you dont use and delete the default admin user). */
  displayName?: Maybe<Scalars['String']>
  /** A string containing the user's email address. */
  email?: Maybe<Scalars['String']>
  /** 	The user's first name. */
  firstName?: Maybe<Scalars['String']>
  /** User's Jabber account. */
  jabber?: Maybe<Scalars['String']>
  /** The user's last name. */
  lastName?: Maybe<Scalars['String']>
  /** User's locale. */
  locale?: Maybe<Scalars['String']>
  /** A string that contains a URL-friendly name for the user. The default is the user's username. */
  nicename?: Maybe<Scalars['String']>
  /** The user's nickname, defaults to the user's username. */
  nickname?: Maybe<Scalars['String']>
  /** A string that contains the plain text password for the user. */
  password?: Maybe<Scalars['String']>
  /** If true, this will refresh the users JWT secret. */
  refreshJwtUserSecret?: Maybe<Scalars['Boolean']>
  /** The date the user registered. Format is Y-m-d H:i:s. */
  registered?: Maybe<Scalars['String']>
  /** If true, this will revoke the users JWT secret. If false, this will unrevoke the JWT secret AND issue a new one. To revoke, the user must have proper capabilities to edit users JWT secrets. */
  revokeJwtUserSecret?: Maybe<Scalars['Boolean']>
  /** A string for whether to enable the rich editor or not. False if not empty. */
  richEditing?: Maybe<Scalars['String']>
  /** A string that contains the user's username. */
  username: Scalars['String']
  /** A string containing the user's URL for the user's web site. */
  websiteUrl?: Maybe<Scalars['String']>
  /** User's Yahoo IM account. */
  yim?: Maybe<Scalars['String']>
}

/** The payload for the registerUser mutation */
export type RegisterUserPayload = {
  __typename?: 'RegisterUserPayload'
  /** @deprecated  */
  clientMutationId: Scalars['String']
  /** @deprecated  */
  user?: Maybe<User>
}

/** Input for the resetUserPassword mutation */
export type ResetUserPasswordInput = {
  clientMutationId: Scalars['String']
  /** Password reset key */
  key?: Maybe<Scalars['String']>
  /** The user's login (username). */
  login?: Maybe<Scalars['String']>
  /** The new password. */
  password?: Maybe<Scalars['String']>
}

/** The payload for the resetUserPassword mutation */
export type ResetUserPasswordPayload = {
  __typename?: 'ResetUserPasswordPayload'
  /** @deprecated  */
  clientMutationId: Scalars['String']
  /** @deprecated  */
  user?: Maybe<User>
}

/** Input for the restoreComment mutation */
export type RestoreCommentInput = {
  clientMutationId: Scalars['String']
  /** The ID of the comment to be restored */
  id: Scalars['ID']
}

/** The payload for the restoreComment mutation */
export type RestoreCommentPayload = {
  __typename?: 'RestoreCommentPayload'
  /** @deprecated  */
  clientMutationId: Scalars['String']
  /**
   * The restored comment object
   * @deprecated
   */
  comment?: Maybe<Comment>
  /**
   * The ID of the restored comment
   * @deprecated
   */
  restoredId?: Maybe<Scalars['ID']>
}

/** Input for the sendPasswordResetEmail mutation */
export type SendPasswordResetEmailInput = {
  clientMutationId: Scalars['String']
  /** A string that contains the user's username or email address. */
  username: Scalars['String']
}

/** The payload for the sendPasswordResetEmail mutation */
export type SendPasswordResetEmailPayload = {
  __typename?: 'SendPasswordResetEmailPayload'
  /** @deprecated  */
  clientMutationId: Scalars['String']
  /**
   * The user that the password reset email was sent to
   * @deprecated
   */
  user?: Maybe<User>
}

/** Input for the updateComment mutation */
export type UpdateCommentInput = {
  /** User agent used to post the comment. */
  agent?: Maybe<Scalars['String']>
  /** The approval status of the comment. */
  approved?: Maybe<Scalars['String']>
  /** The name of the comment's author. */
  author?: Maybe<Scalars['String']>
  /** The email of the comment's author. */
  authorEmail?: Maybe<Scalars['String']>
  /** IP address for the comment's author. */
  authorIp?: Maybe<Scalars['String']>
  /** The url of the comment's author. */
  authorUrl?: Maybe<Scalars['String']>
  clientMutationId: Scalars['String']
  /** The ID of the post object the comment belongs to. */
  commentOn?: Maybe<Scalars['Int']>
  /** Content of the comment. */
  content?: Maybe<Scalars['String']>
  /** The date of the object. Preferable to enter as year/month/day ( e.g. 01/31/2017 ) as it will rearrange date as fit if it is not specified. Incomplete dates may have unintended results for example, "2017" as the input will use current date with timestamp 20:17  */
  date?: Maybe<Scalars['String']>
  /** The ID of the comment being updated. */
  id: Scalars['ID']
  /** Parent comment of current comment. */
  parent?: Maybe<Scalars['ID']>
  /** Type of comment. */
  type?: Maybe<Scalars['String']>
  /** The userID of the comment's author. */
  userId?: Maybe<Scalars['Int']>
}

/** The payload for the updateComment mutation */
export type UpdateCommentPayload = {
  __typename?: 'UpdateCommentPayload'
  /** @deprecated  */
  clientMutationId: Scalars['String']
  /**
   * The comment that was created
   * @deprecated
   */
  comment?: Maybe<Comment>
  /**
   * Whether the mutation succeeded. If the comment is not approved, the server will not return the comment to a non authenticated user, but a success message can be returned if the create succeeded, and the client can optimistically add the comment to the client cache
   * @deprecated
   */
  success?: Maybe<Scalars['Boolean']>
}

/** Input for the updateMediaItem mutation */
export type UpdateMediaItemInput = {
  /** Alternative text to display when mediaItem is not displayed */
  altText?: Maybe<Scalars['String']>
  /** The userId to assign as the author of the mediaItem */
  authorId?: Maybe<Scalars['ID']>
  /** The caption for the mediaItem */
  caption?: Maybe<Scalars['String']>
  clientMutationId: Scalars['String']
  /** The comment status for the mediaItem */
  commentStatus?: Maybe<Scalars['String']>
  /** The date of the mediaItem */
  date?: Maybe<Scalars['String']>
  /** The date (in GMT zone) of the mediaItem */
  dateGmt?: Maybe<Scalars['String']>
  /** Description of the mediaItem */
  description?: Maybe<Scalars['String']>
  /** The file name of the mediaItem */
  filePath?: Maybe<Scalars['String']>
  /** The file type of the mediaItem */
  fileType?: Maybe<MimeTypeEnum>
  /** The ID of the mediaItem object */
  id: Scalars['ID']
  /** The WordPress post ID or the graphQL postId of the parent object */
  parentId?: Maybe<Scalars['ID']>
  /** The ping status for the mediaItem */
  pingStatus?: Maybe<Scalars['String']>
  /** The slug of the mediaItem */
  slug?: Maybe<Scalars['String']>
  /** The status of the mediaItem */
  status?: Maybe<MediaItemStatusEnum>
  /** The title of the mediaItem */
  title?: Maybe<Scalars['String']>
}

/** The payload for the updateMediaItem mutation */
export type UpdateMediaItemPayload = {
  __typename?: 'UpdateMediaItemPayload'
  /** @deprecated  */
  clientMutationId: Scalars['String']
  /** @deprecated  */
  mediaItem?: Maybe<MediaItem>
}

/** Input for the updatePage mutation */
export type UpdatePageInput = {
  /** The userId to assign as the author of the object */
  authorId?: Maybe<Scalars['ID']>
  clientMutationId: Scalars['String']
  /** The comment status for the object */
  commentStatus?: Maybe<Scalars['String']>
  /** The content of the object */
  content?: Maybe<Scalars['String']>
  /** The date of the object. Preferable to enter as year/month/day (e.g. 01/31/2017) as it will rearrange date as fit if it is not specified. Incomplete dates may have unintended results for example, "2017" as the input will use current date with timestamp 20:17  */
  date?: Maybe<Scalars['String']>
  /** The ID of the page object */
  id: Scalars['ID']
  /** A field used for ordering posts. This is typically used with nav menu items or for special ordering of hierarchical content types. */
  menuOrder?: Maybe<Scalars['Int']>
  /** The ID of the parent object */
  parentId?: Maybe<Scalars['ID']>
  /** The password used to protect the content of the object */
  password?: Maybe<Scalars['String']>
  /** The slug of the object */
  slug?: Maybe<Scalars['String']>
  /** The status of the object */
  status?: Maybe<PostStatusEnum>
  /** The title of the object */
  title?: Maybe<Scalars['String']>
}

/** The payload for the updatePage mutation */
export type UpdatePagePayload = {
  __typename?: 'UpdatePagePayload'
  /** @deprecated  */
  clientMutationId: Scalars['String']
  /** @deprecated  */
  page?: Maybe<Page>
}

/** Input for the updatePost mutation */
export type UpdatePostInput = {
  /** The userId to assign as the author of the object */
  authorId?: Maybe<Scalars['ID']>
  /** Set connections between the post and categories */
  categories?: Maybe<PostCategoriesInput>
  clientMutationId: Scalars['String']
  /** The comment status for the object */
  commentStatus?: Maybe<Scalars['String']>
  /** The content of the object */
  content?: Maybe<Scalars['String']>
  /** The date of the object. Preferable to enter as year/month/day (e.g. 01/31/2017) as it will rearrange date as fit if it is not specified. Incomplete dates may have unintended results for example, "2017" as the input will use current date with timestamp 20:17  */
  date?: Maybe<Scalars['String']>
  /** The excerpt of the object */
  excerpt?: Maybe<Scalars['String']>
  /** The ID of the post object */
  id: Scalars['ID']
  /** A field used for ordering posts. This is typically used with nav menu items or for special ordering of hierarchical content types. */
  menuOrder?: Maybe<Scalars['Int']>
  /** The password used to protect the content of the object */
  password?: Maybe<Scalars['String']>
  /** The ping status for the object */
  pingStatus?: Maybe<Scalars['String']>
  /** URLs that have been pinged. */
  pinged?: Maybe<Array<Maybe<Scalars['String']>>>
  /** Set connections between the post and postFormats */
  postFormats?: Maybe<PostPostFormatsInput>
  /** The slug of the object */
  slug?: Maybe<Scalars['String']>
  /** The status of the object */
  status?: Maybe<PostStatusEnum>
  /** Set connections between the post and tags */
  tags?: Maybe<PostTagsInput>
  /** The title of the object */
  title?: Maybe<Scalars['String']>
  /** URLs queued to be pinged. */
  toPing?: Maybe<Array<Maybe<Scalars['String']>>>
}

/** The payload for the updatePost mutation */
export type UpdatePostPayload = {
  __typename?: 'UpdatePostPayload'
  /** @deprecated  */
  clientMutationId: Scalars['String']
  /** @deprecated  */
  post?: Maybe<Post>
}

/** Input for the updateSettings mutation */
export type UpdateSettingsInput = {
  clientMutationId: Scalars['String']
  /** Allow people to submit comments on new posts. */
  discussionSettingsDefaultCommentStatus?: Maybe<Scalars['String']>
  /** Allow link notifications from other blogs (pingbacks and trackbacks) on new articles. */
  discussionSettingsDefaultPingStatus?: Maybe<Scalars['String']>
  /** A date format for all date strings. */
  generalSettingsDateFormat?: Maybe<Scalars['String']>
  /** Site tagline. */
  generalSettingsDescription?: Maybe<Scalars['String']>
  /** This address is used for admin purposes, like new user notification. */
  generalSettingsEmail?: Maybe<Scalars['String']>
  /** WordPress locale code. */
  generalSettingsLanguage?: Maybe<Scalars['String']>
  /** A day number of the week that the week should start on. */
  generalSettingsStartOfWeek?: Maybe<Scalars['Int']>
  /** A time format for all time strings. */
  generalSettingsTimeFormat?: Maybe<Scalars['String']>
  /** A city in the same timezone as you. */
  generalSettingsTimezone?: Maybe<Scalars['String']>
  /** Site title. */
  generalSettingsTitle?: Maybe<Scalars['String']>
  /** Site URL. */
  generalSettingsUrl?: Maybe<Scalars['String']>
  /** Blog pages show at most. */
  readingSettingsPostsPerPage?: Maybe<Scalars['Int']>
  /** Default post category. */
  writingSettingsDefaultCategory?: Maybe<Scalars['Int']>
  /** Default post format. */
  writingSettingsDefaultPostFormat?: Maybe<Scalars['String']>
  /** Convert emoticons like :-) and :-P to graphics on display. */
  writingSettingsUseSmilies?: Maybe<Scalars['Boolean']>
}

/** The payload for the updateSettings mutation */
export type UpdateSettingsPayload = {
  __typename?: 'UpdateSettingsPayload'
  /** @deprecated  */
  allSettings?: Maybe<Settings>
  /** @deprecated  */
  clientMutationId: Scalars['String']
  /** @deprecated  */
  discussionSettings?: Maybe<DiscussionSettings>
  /** @deprecated  */
  generalSettings?: Maybe<GeneralSettings>
  /** @deprecated  */
  readingSettings?: Maybe<ReadingSettings>
  /** @deprecated  */
  writingSettings?: Maybe<WritingSettings>
}

/** Input for the updateUser mutation */
export type UpdateUserInput = {
  /** User's AOL IM account. */
  aim?: Maybe<Scalars['String']>
  clientMutationId: Scalars['String']
  /** A string containing content about the user. */
  description?: Maybe<Scalars['String']>
  /** A string that will be shown on the site. Defaults to user's username. It is likely that you will want to change this, for both appearance and security through obscurity (that is if you dont use and delete the default admin user). */
  displayName?: Maybe<Scalars['String']>
  /** A string containing the user's email address. */
  email?: Maybe<Scalars['String']>
  /** 	The user's first name. */
  firstName?: Maybe<Scalars['String']>
  /** The ID of the user */
  id: Scalars['ID']
  /** User's Jabber account. */
  jabber?: Maybe<Scalars['String']>
  /** The user's last name. */
  lastName?: Maybe<Scalars['String']>
  /** User's locale. */
  locale?: Maybe<Scalars['String']>
  /** A string that contains a URL-friendly name for the user. The default is the user's username. */
  nicename?: Maybe<Scalars['String']>
  /** The user's nickname, defaults to the user's username. */
  nickname?: Maybe<Scalars['String']>
  /** A string that contains the plain text password for the user. */
  password?: Maybe<Scalars['String']>
  /** If true, this will refresh the users JWT secret. */
  refreshJwtUserSecret?: Maybe<Scalars['Boolean']>
  /** The date the user registered. Format is Y-m-d H:i:s. */
  registered?: Maybe<Scalars['String']>
  /** If true, this will revoke the users JWT secret. If false, this will unrevoke the JWT secret AND issue a new one. To revoke, the user must have proper capabilities to edit users JWT secrets. */
  revokeJwtUserSecret?: Maybe<Scalars['Boolean']>
  /** A string for whether to enable the rich editor or not. False if not empty. */
  richEditing?: Maybe<Scalars['String']>
  /** An array of roles to be assigned to the user. */
  roles?: Maybe<Array<Maybe<Scalars['String']>>>
  /** A string containing the user's URL for the user's web site. */
  websiteUrl?: Maybe<Scalars['String']>
  /** User's Yahoo IM account. */
  yim?: Maybe<Scalars['String']>
}

/** The payload for the updateUser mutation */
export type UpdateUserPayload = {
  __typename?: 'UpdateUserPayload'
  /** @deprecated  */
  clientMutationId: Scalars['String']
  /** @deprecated  */
  user?: Maybe<User>
}

export interface IntrospectionResultData {
  __schema: {
    types: {
      kind: string
      name: string
      possibleTypes: {
        name: string
      }[]
    }[]
  }
}
const result: IntrospectionResultData = {
  __schema: {
    types: [
      {
        kind: 'INTERFACE',
        name: 'Node',
        possibleTypes: [
          {
            name: 'Category',
          },
          {
            name: 'Post',
          },
          {
            name: 'User',
          },
          {
            name: 'Comment',
          },
          {
            name: 'CommentAuthor',
          },
          {
            name: 'Page',
          },
          {
            name: 'MediaItem',
          },
          {
            name: 'ContentType',
          },
          {
            name: 'Taxonomy',
          },
          {
            name: 'Tag',
          },
          {
            name: 'PostFormat',
          },
          {
            name: 'UserRole',
          },
          {
            name: 'Menu',
          },
          {
            name: 'MenuItem',
          },
          {
            name: 'Plugin',
          },
          {
            name: 'Theme',
          },
        ],
      },
      {
        kind: 'INTERFACE',
        name: 'TermNode',
        possibleTypes: [
          {
            name: 'Category',
          },
          {
            name: 'Tag',
          },
          {
            name: 'PostFormat',
          },
        ],
      },
      {
        kind: 'INTERFACE',
        name: 'UniformResourceIdentifiable',
        possibleTypes: [
          {
            name: 'Category',
          },
          {
            name: 'Post',
          },
          {
            name: 'User',
          },
          {
            name: 'Page',
          },
          {
            name: 'MediaItem',
          },
          {
            name: 'Tag',
          },
          {
            name: 'PostFormat',
          },
        ],
      },
      {
        kind: 'INTERFACE',
        name: 'ContentNode',
        possibleTypes: [
          {
            name: 'Post',
          },
          {
            name: 'Page',
          },
          {
            name: 'MediaItem',
          },
        ],
      },
      {
        kind: 'UNION',
        name: 'CommentAuthorUnion',
        possibleTypes: [
          {
            name: 'User',
          },
          {
            name: 'CommentAuthor',
          },
        ],
      },
      {
        kind: 'UNION',
        name: 'PostObjectUnion',
        possibleTypes: [
          {
            name: 'Post',
          },
          {
            name: 'Page',
          },
          {
            name: 'MediaItem',
          },
        ],
      },
      {
        kind: 'INTERFACE',
        name: 'NodeWithTitle',
        possibleTypes: [
          {
            name: 'Post',
          },
          {
            name: 'Page',
          },
          {
            name: 'MediaItem',
          },
        ],
      },
      {
        kind: 'INTERFACE',
        name: 'NodeWithContentEditor',
        possibleTypes: [
          {
            name: 'Post',
          },
          {
            name: 'Page',
          },
        ],
      },
      {
        kind: 'INTERFACE',
        name: 'NodeWithAuthor',
        possibleTypes: [
          {
            name: 'Post',
          },
          {
            name: 'Page',
          },
          {
            name: 'MediaItem',
          },
        ],
      },
      {
        kind: 'INTERFACE',
        name: 'NodeWithFeaturedImage',
        possibleTypes: [
          {
            name: 'Post',
          },
          {
            name: 'Page',
          },
        ],
      },
      {
        kind: 'INTERFACE',
        name: 'NodeWithComments',
        possibleTypes: [
          {
            name: 'Post',
          },
          {
            name: 'Page',
          },
          {
            name: 'MediaItem',
          },
        ],
      },
      {
        kind: 'INTERFACE',
        name: 'HierarchicalContentNode',
        possibleTypes: [
          {
            name: 'Page',
          },
          {
            name: 'MediaItem',
          },
        ],
      },
      {
        kind: 'UNION',
        name: 'ContentTemplateUnion',
        possibleTypes: [
          {
            name: 'DefaultTemplate',
          },
          {
            name: 'CoverTemplateTemplate',
          },
          {
            name: 'FullWidthTemplateTemplate',
          },
        ],
      },
      {
        kind: 'INTERFACE',
        name: 'ContentTemplate',
        possibleTypes: [
          {
            name: 'DefaultTemplate',
          },
          {
            name: 'CoverTemplateTemplate',
          },
          {
            name: 'FullWidthTemplateTemplate',
          },
        ],
      },
      {
        kind: 'UNION',
        name: 'TermObjectUnion',
        possibleTypes: [
          {
            name: 'Category',
          },
          {
            name: 'Tag',
          },
          {
            name: 'PostFormat',
          },
        ],
      },
      {
        kind: 'INTERFACE',
        name: 'NodeWithRevisions',
        possibleTypes: [
          {
            name: 'Post',
          },
          {
            name: 'Page',
          },
        ],
      },
      {
        kind: 'INTERFACE',
        name: 'NodeWithPageAttributes',
        possibleTypes: [
          {
            name: 'Page',
          },
        ],
      },
      {
        kind: 'UNION',
        name: 'ContentRevisionUnion',
        possibleTypes: [
          {
            name: 'Post',
          },
          {
            name: 'Page',
          },
        ],
      },
      {
        kind: 'INTERFACE',
        name: 'NodeWithExcerpt',
        possibleTypes: [
          {
            name: 'Post',
          },
        ],
      },
      {
        kind: 'INTERFACE',
        name: 'NodeWithTrackbacks',
        possibleTypes: [
          {
            name: 'Post',
          },
        ],
      },
      {
        kind: 'UNION',
        name: 'MenuItemObjectUnion',
        possibleTypes: [
          {
            name: 'Post',
          },
          {
            name: 'Page',
          },
          {
            name: 'Category',
          },
          {
            name: 'Tag',
          },
          {
            name: 'MenuItem',
          },
        ],
      },
    ],
  },
}
export default result

export type GetCategoryBySlugQueryVariables = {
  slug: Scalars['ID']
  after?: Maybe<Scalars['String']>
}

export type GetCategoryBySlugQuery = { __typename?: 'RootQuery' } & {
  category?: Maybe<
    { __typename?: 'Category' } & Pick<Category, 'name' | 'databaseId'> & {
        posts?: Maybe<
          { __typename?: 'CategoryToPostConnection' } & {
            nodes?: Maybe<
              Array<
                Maybe<{ __typename?: 'Post' } & Pick<Post, 'slug' | 'title'>>
              >
            >
          }
        >
      }
  >
}

export type GetCategoriesQueryVariables = {}

export type GetCategoriesQuery = { __typename?: 'RootQuery' } & {
  categories?: Maybe<
    { __typename?: 'RootQueryToCategoryConnection' } & {
      pageInfo?: Maybe<
        { __typename?: 'WPPageInfo' } & Pick<
          WpPageInfo,
          'hasNextPage' | 'endCursor'
        >
      >
      nodes?: Maybe<
        Array<
          Maybe<
            { __typename?: 'Category' } & Pick<Category, 'slug' | 'name'> & {
                color?: Maybe<
                  { __typename?: 'Category_Color' } & Pick<
                    Category_Color,
                    'color'
                  >
                >
                showMenu?: Maybe<
                  { __typename?: 'Category_Showmenu' } & Pick<
                    Category_Showmenu,
                    'showheader' | 'showfooter'
                  >
                >
              }
          >
        >
      >
    }
  >
}

export type GetCommentsQueryVariables = {
  postId: Scalars['ID']
  after?: Maybe<Scalars['String']>
}

export type GetCommentsQuery = { __typename?: 'RootQuery' } & {
  comments?: Maybe<
    { __typename?: 'RootQueryToCommentConnection' } & {
      pageInfo?: Maybe<
        { __typename?: 'WPPageInfo' } & Pick<
          WpPageInfo,
          'hasNextPage' | 'endCursor'
        >
      >
      nodes?: Maybe<
        Array<
          Maybe<
            { __typename?: 'Comment' } & Pick<
              Comment,
              'commentId' | 'date' | 'approved' | 'content'
            > & {
                author?: Maybe<
                  | ({ __typename?: 'User' } & Pick<User, 'name'> & {
                        avatar?: Maybe<
                          { __typename?: 'Avatar' } & Pick<Avatar, 'url'>
                        >
                      })
                  | ({ __typename?: 'CommentAuthor' } & Pick<
                      CommentAuthor,
                      'name'
                    >)
                >
              }
          >
        >
      >
    }
  >
}

export type Create_CommentMutationVariables = {
  comment: CreateCommentInput
}

export type Create_CommentMutation = { __typename?: 'RootMutation' } & {
  createComment?: Maybe<
    { __typename?: 'CreateCommentPayload' } & {
      comment?: Maybe<
        { __typename?: 'Comment' } & Pick<
          Comment,
          'commentId' | 'date' | 'approved' | 'content'
        > & {
            author?: Maybe<
              | ({ __typename?: 'User' } & Pick<User, 'name'> & {
                    avatar?: Maybe<
                      { __typename?: 'Avatar' } & Pick<Avatar, 'url'>
                    >
                  })
              | ({ __typename?: 'CommentAuthor' } & Pick<CommentAuthor, 'name'>)
            >
          }
      >
    }
  >
}

export type GetPageByUriQueryVariables = {
  uri: Scalars['ID']
}

export type GetPageByUriQuery = { __typename?: 'RootQuery' } & {
  page?: Maybe<{ __typename?: 'Page' } & Pick<Page, 'title' | 'content'>>
}

export type GetPagesQueryVariables = {}

export type GetPagesQuery = { __typename?: 'RootQuery' } & {
  pages?: Maybe<
    { __typename?: 'RootQueryToPageConnection' } & {
      nodes?: Maybe<
        Array<Maybe<{ __typename?: 'Page' } & Pick<Page, 'title' | 'uri'>>>
      >
    }
  >
}

export type GetPostBySlugQueryVariables = {
  slug: Scalars['ID']
}

export type GetPostBySlugQuery = { __typename?: 'RootQuery' } & {
  post?: Maybe<
    { __typename?: 'Post' } & Pick<
      Post,
      | 'slug'
      | 'databaseId'
      | 'title'
      | 'excerpt'
      | 'date'
      | 'modified'
      | 'content'
      | 'commentCount'
      | 'commentStatus'
    > & {
        author?: Maybe<
          { __typename?: 'User' } & Pick<User, 'slug' | 'name'> & {
              avatar?: Maybe<{ __typename?: 'Avatar' } & Pick<Avatar, 'url'>>
            }
        >
        featuredImage?: Maybe<
          { __typename?: 'MediaItem' } & Pick<
            MediaItem,
            'altText' | 'sourceUrl' | 'caption' | 'description'
          >
        >
      }
  >
}

export type GetFeaturedPostQueryVariables = {}

export type GetFeaturedPostQuery = { __typename?: 'RootQuery' } & {
  featuredPost?: Maybe<
    { __typename?: 'RootQueryToPostConnection' } & {
      nodes?: Maybe<
        Array<
          Maybe<
            { __typename?: 'Post' } & Pick<
              Post,
              'id' | 'title' | 'slug' | 'date' | 'commentCount' | 'excerpt'
            > & {
                author?: Maybe<
                  { __typename?: 'User' } & Pick<User, 'name' | 'slug'>
                >
                categories?: Maybe<
                  { __typename?: 'PostToCategoryConnection' } & {
                    nodes?: Maybe<
                      Array<
                        Maybe<
                          { __typename?: 'Category' } & Pick<
                            Category,
                            'slug' | 'name'
                          >
                        >
                      >
                    >
                  }
                >
                thumbnail?: Maybe<
                  { __typename?: 'MediaItem' } & Pick<MediaItem, 'sourceUrl'>
                >
                image?: Maybe<
                  { __typename?: 'MediaItem' } & Pick<
                    MediaItem,
                    'altText' | 'sourceUrl' | 'caption' | 'description'
                  >
                >
              }
          >
        >
      >
    }
  >
}

export type GetPostsQueryVariables = {
  after?: Maybe<Scalars['String']>
}

export type GetPostsQuery = { __typename?: 'RootQuery' } & {
  posts?: Maybe<
    { __typename?: 'RootQueryToPostConnection' } & {
      pageInfo?: Maybe<
        { __typename?: 'WPPageInfo' } & Pick<
          WpPageInfo,
          'hasNextPage' | 'endCursor'
        >
      >
      nodes?: Maybe<
        Array<
          Maybe<
            { __typename?: 'Post' } & Pick<
              Post,
              'id' | 'title' | 'slug' | 'date' | 'commentCount' | 'excerpt'
            > & {
                author?: Maybe<
                  { __typename?: 'User' } & Pick<User, 'name' | 'slug'>
                >
                categories?: Maybe<
                  { __typename?: 'PostToCategoryConnection' } & {
                    nodes?: Maybe<
                      Array<
                        Maybe<
                          { __typename?: 'Category' } & Pick<
                            Category,
                            'slug' | 'name'
                          >
                        >
                      >
                    >
                  }
                >
                thumbnail?: Maybe<
                  { __typename?: 'MediaItem' } & Pick<MediaItem, 'sourceUrl'>
                >
                image?: Maybe<
                  { __typename?: 'MediaItem' } & Pick<
                    MediaItem,
                    'altText' | 'sourceUrl' | 'caption' | 'description'
                  >
                >
              }
          >
        >
      >
    }
  >
}

export type GetAllPostsQueryVariables = {}

export type GetAllPostsQuery = { __typename?: 'RootQuery' } & {
  posts?: Maybe<
    { __typename?: 'RootQueryToPostConnection' } & {
      nodes?: Maybe<
        Array<Maybe<{ __typename?: 'Post' } & Pick<Post, 'title' | 'slug'>>>
      >
    }
  >
}

export type GetPostsByAuthorQueryVariables = {
  after?: Maybe<Scalars['String']>
  id?: Maybe<Array<Maybe<Scalars['ID']>>>
}

export type GetPostsByAuthorQuery = { __typename?: 'RootQuery' } & {
  posts?: Maybe<
    { __typename?: 'RootQueryToPostConnection' } & {
      pageInfo?: Maybe<
        { __typename?: 'WPPageInfo' } & Pick<
          WpPageInfo,
          'hasNextPage' | 'endCursor'
        >
      >
      nodes?: Maybe<
        Array<
          Maybe<
            { __typename?: 'Post' } & Pick<
              Post,
              'id' | 'title' | 'slug' | 'date' | 'commentCount' | 'excerpt'
            > & {
                author?: Maybe<
                  { __typename?: 'User' } & Pick<User, 'name' | 'slug'>
                >
                categories?: Maybe<
                  { __typename?: 'PostToCategoryConnection' } & {
                    nodes?: Maybe<
                      Array<
                        Maybe<
                          { __typename?: 'Category' } & Pick<
                            Category,
                            'slug' | 'name'
                          >
                        >
                      >
                    >
                  }
                >
                thumbnail?: Maybe<
                  { __typename?: 'MediaItem' } & Pick<MediaItem, 'sourceUrl'>
                >
                image?: Maybe<
                  { __typename?: 'MediaItem' } & Pick<
                    MediaItem,
                    'altText' | 'sourceUrl' | 'caption' | 'description'
                  >
                >
              }
          >
        >
      >
    }
  >
}

export type GetPostsByCategoryIdQueryVariables = {
  after?: Maybe<Scalars['String']>
  id?: Maybe<Scalars['Int']>
}

export type GetPostsByCategoryIdQuery = { __typename?: 'RootQuery' } & {
  posts?: Maybe<
    { __typename?: 'RootQueryToPostConnection' } & {
      pageInfo?: Maybe<
        { __typename?: 'WPPageInfo' } & Pick<
          WpPageInfo,
          'hasNextPage' | 'endCursor'
        >
      >
      nodes?: Maybe<
        Array<
          Maybe<
            { __typename?: 'Post' } & Pick<
              Post,
              'id' | 'title' | 'slug' | 'date' | 'commentCount' | 'excerpt'
            > & {
                author?: Maybe<
                  { __typename?: 'User' } & Pick<User, 'name' | 'slug'>
                >
                categories?: Maybe<
                  { __typename?: 'PostToCategoryConnection' } & {
                    nodes?: Maybe<
                      Array<
                        Maybe<
                          { __typename?: 'Category' } & Pick<
                            Category,
                            'slug' | 'name'
                          >
                        >
                      >
                    >
                  }
                >
                thumbnail?: Maybe<
                  { __typename?: 'MediaItem' } & Pick<MediaItem, 'sourceUrl'>
                >
                image?: Maybe<
                  { __typename?: 'MediaItem' } & Pick<
                    MediaItem,
                    'altText' | 'sourceUrl' | 'caption' | 'description'
                  >
                >
              }
          >
        >
      >
    }
  >
}

export type SearchPostsQueryVariables = {
  after?: Maybe<Scalars['String']>
  search?: Maybe<Scalars['String']>
}

export type SearchPostsQuery = { __typename?: 'RootQuery' } & {
  posts?: Maybe<
    { __typename?: 'RootQueryToPostConnection' } & {
      pageInfo?: Maybe<
        { __typename?: 'WPPageInfo' } & Pick<
          WpPageInfo,
          'hasNextPage' | 'endCursor'
        >
      >
      nodes?: Maybe<
        Array<
          Maybe<
            { __typename?: 'Post' } & Pick<
              Post,
              'id' | 'title' | 'slug' | 'date' | 'commentCount' | 'excerpt'
            > & {
                author?: Maybe<
                  { __typename?: 'User' } & Pick<User, 'name' | 'slug'>
                >
                categories?: Maybe<
                  { __typename?: 'PostToCategoryConnection' } & {
                    nodes?: Maybe<
                      Array<
                        Maybe<
                          { __typename?: 'Category' } & Pick<
                            Category,
                            'slug' | 'name'
                          >
                        >
                      >
                    >
                  }
                >
                thumbnail?: Maybe<
                  { __typename?: 'MediaItem' } & Pick<MediaItem, 'sourceUrl'>
                >
                image?: Maybe<
                  { __typename?: 'MediaItem' } & Pick<
                    MediaItem,
                    'altText' | 'sourceUrl' | 'caption' | 'description'
                  >
                >
              }
          >
        >
      >
    }
  >
}

export type GetSettingsQueryVariables = {}

export type GetSettingsQuery = { __typename?: 'RootQuery' } & {
  settings?: Maybe<
    { __typename?: 'GeneralSettings' } & Pick<GeneralSettings, 'title'>
  >
  menus?: Maybe<
    { __typename?: 'RootQueryToMenuConnection' } & {
      nodes?: Maybe<
        Array<
          Maybe<
            { __typename?: 'Menu' } & Pick<Menu, 'name'> & {
                menuItems?: Maybe<
                  { __typename?: 'MenuToMenuItemConnection' } & {
                    nodes?: Maybe<
                      Array<
                        Maybe<
                          { __typename?: 'MenuItem' } & Pick<
                            MenuItem,
                            'label' | 'url'
                          > & {
                              connectedObject?: Maybe<
                                | ({ __typename: 'Post' } & Pick<
                                    Post,
                                    'slug' | 'title'
                                  >)
                                | ({ __typename: 'Page' } & Pick<
                                    Page,
                                    'slug' | 'title'
                                  >)
                                | ({ __typename: 'Category' } & Pick<
                                    Category,
                                    'slug' | 'categoryId'
                                  >)
                                | { __typename: 'Tag' }
                                | ({ __typename: 'MenuItem' } & Pick<
                                    MenuItem,
                                    'label' | 'url'
                                  >)
                              >
                            }
                        >
                      >
                    >
                  }
                >
              }
          >
        >
      >
    }
  >
}

export type GetAuthorBySlugQueryVariables = {
  slug: Scalars['ID']
}

export type GetAuthorBySlugQuery = { __typename?: 'RootQuery' } & {
  user?: Maybe<
    { __typename?: 'User' } & Pick<
      User,
      | 'slug'
      | 'userId'
      | 'email'
      | 'name'
      | 'firstName'
      | 'lastName'
      | 'isRestricted'
      | 'description'
    > & { avatar?: Maybe<{ __typename?: 'Avatar' } & Pick<Avatar, 'url'>> }
  >
}

export type GetAuthorsQueryVariables = {}

export type GetAuthorsQuery = { __typename?: 'RootQuery' } & {
  users?: Maybe<
    { __typename?: 'RootQueryToUserConnection' } & {
      nodes?: Maybe<
        Array<
          Maybe<
            { __typename?: 'User' } & Pick<User, 'slug' | 'name' | 'userId'>
          >
        >
      >
    }
  >
}

export const GetCategoryBySlugDocument = gql`
  query getCategoryBySlug($slug: ID!, $after: String) {
    category: category(id: $slug, idType: SLUG) {
      name
      databaseId
      posts(after: $after, first: 8) {
        nodes {
          slug
          title(format: RAW)
        }
      }
    }
  }
`
export const GetCategoriesDocument = gql`
  query getCategories {
    categories: categories(first: 100, where: { childless: false }) {
      pageInfo {
        hasNextPage
        endCursor
      }
      nodes {
        slug
        name
        color {
          color
        }
        showMenu {
          showheader
          showfooter
        }
      }
    }
  }
`
export const GetCommentsDocument = gql`
  query getComments($postId: ID!, $after: String) {
    comments: comments(where: { contentId: $postId }, after: $after, first: 8) {
      pageInfo {
        hasNextPage
        endCursor
      }
      nodes {
        commentId
        date
        approved
        content(format: RENDERED)
        date
        author {
          ... on CommentAuthor {
            name
          }
          ... on User {
            avatar {
              url
            }
            name
          }
        }
      }
    }
  }
`
export const Create_CommentDocument = gql`
  mutation CREATE_COMMENT($comment: CreateCommentInput!) {
    createComment(input: $comment) {
      comment {
        commentId
        date
        approved
        content(format: RENDERED)
        date
        author {
          ... on CommentAuthor {
            name
          }
          ... on User {
            avatar {
              url
            }
            name
          }
        }
      }
    }
  }
`
export const GetPageByUriDocument = gql`
  query getPageByUri($uri: ID!) {
    page: page(id: $uri, idType: URI) {
      title(format: RENDERED)
      content
    }
  }
`
export const GetPagesDocument = gql`
  query getPages {
    pages: pages(first: 10) {
      nodes {
        title(format: RENDERED)
        uri
      }
    }
  }
`
export const GetPostBySlugDocument = gql`
  query getPostBySlug($slug: ID!) {
    post: post(id: $slug, idType: SLUG) {
      slug
      databaseId
      title(format: RENDERED)
      excerpt(format: RENDERED)
      date
      modified
      author {
        slug
        name
        avatar {
          url
        }
      }
      featuredImage {
        altText
        sourceUrl(size: _2048X2048)
        caption(format: RAW)
        description(format: RAW)
      }
      content(format: RENDERED)
      commentCount
      commentStatus
    }
  }
`
export const GetFeaturedPostDocument = gql`
  query getFeaturedPost {
    featuredPost: posts {
      nodes {
        id
        title(format: RENDERED)
        slug
        author {
          name
          slug
        }
        date
        categories {
          nodes {
            slug
            name
          }
        }
        commentCount
        excerpt(format: RENDERED)
        thumbnail: featuredImage {
          sourceUrl(size: POST_THUMBNAIL)
        }
        image: featuredImage {
          altText
          sourceUrl(size: _2048X2048)
          caption(format: RAW)
          description(format: RAW)
        }
      }
    }
  }
`
export const GetPostsDocument = gql`
  query getPosts($after: String) {
    posts: posts(after: $after, first: 8) {
      pageInfo {
        hasNextPage
        endCursor
      }
      nodes {
        id
        title(format: RENDERED)
        slug
        author {
          name
          slug
        }
        date
        categories {
          nodes {
            slug
            name
          }
        }
        commentCount
        excerpt(format: RENDERED)
        thumbnail: featuredImage {
          sourceUrl(size: POST_THUMBNAIL)
        }
        image: featuredImage {
          altText
          sourceUrl(size: LARGE)
          caption(format: RAW)
          description(format: RAW)
        }
      }
    }
  }
`
export const GetAllPostsDocument = gql`
  query getAllPosts {
    posts: posts(first: 10000) {
      nodes {
        title(format: RENDERED)
        slug
      }
    }
  }
`
export const GetPostsByAuthorDocument = gql`
  query getPostsByAuthor($after: String, $id: [ID]) {
    posts: posts(after: $after, first: 8, where: { authorIn: $id }) {
      pageInfo {
        hasNextPage
        endCursor
      }
      nodes {
        id
        title(format: RENDERED)
        slug
        author {
          name
          slug
        }
        date
        categories {
          nodes {
            slug
            name
          }
        }
        commentCount
        excerpt(format: RENDERED)
        thumbnail: featuredImage {
          sourceUrl(size: POST_THUMBNAIL)
        }
        image: featuredImage {
          altText
          sourceUrl(size: LARGE)
          caption(format: RAW)
          description(format: RAW)
        }
      }
    }
  }
`
export const GetPostsByCategoryIdDocument = gql`
  query getPostsByCategoryId($after: String, $id: Int) {
    posts: posts(after: $after, first: 8, where: { categoryId: $id }) {
      pageInfo {
        hasNextPage
        endCursor
      }
      nodes {
        id
        title(format: RENDERED)
        slug
        author {
          name
          slug
        }
        date
        categories {
          nodes {
            slug
            name
          }
        }
        commentCount
        excerpt(format: RENDERED)
        thumbnail: featuredImage {
          sourceUrl(size: POST_THUMBNAIL)
        }
        image: featuredImage {
          altText
          sourceUrl(size: LARGE)
          caption(format: RAW)
          description(format: RAW)
        }
      }
    }
  }
`
export const SearchPostsDocument = gql`
  query searchPosts($after: String, $search: String) {
    posts: posts(where: { search: $search }, after: $after, first: 8) {
      pageInfo {
        hasNextPage
        endCursor
      }
      nodes {
        id
        title(format: RENDERED)
        slug
        author {
          name
          slug
        }
        date
        categories {
          nodes {
            slug
            name
          }
        }
        commentCount
        excerpt(format: RENDERED)
        thumbnail: featuredImage {
          sourceUrl(size: POST_THUMBNAIL)
        }
        image: featuredImage {
          altText
          sourceUrl(size: LARGE)
          caption(format: RAW)
          description(format: RAW)
        }
      }
    }
  }
`
export const GetSettingsDocument = gql`
  query getSettings {
    settings: generalSettings {
      title
    }
    menus: menus(where: { slug: "header_links" }) {
      nodes {
        name
        menuItems {
          nodes {
            label
            url
            connectedObject {
              __typename
              ... on Category {
                slug
                categoryId
              }
              ... on MenuItem {
                label
                url
              }
              ... on Page {
                slug
                title(format: RENDERED)
              }
              ... on Post {
                slug
                title(format: RENDERED)
              }
            }
          }
        }
      }
    }
  }
`
export const GetAuthorBySlugDocument = gql`
  query getAuthorBySlug($slug: ID!) {
    user: user(idType: SLUG, id: $slug) {
      slug
      userId
      email
      name
      firstName
      lastName
      isRestricted
      description
      avatar {
        url
      }
    }
  }
`
export const GetAuthorsDocument = gql`
  query getAuthors {
    users: users(first: 100) {
      nodes {
        slug
        name
        userId
      }
    }
  }
`

export type SdkFunctionWrapper = <T>(action: () => Promise<T>) => Promise<T>

const defaultWrapper: SdkFunctionWrapper = (sdkFunction) => sdkFunction()
export function getSdk(
  client: GraphQLClient,
  withWrapper: SdkFunctionWrapper = defaultWrapper,
) {
  return {
    getCategoryBySlug(
      variables: GetCategoryBySlugQueryVariables,
    ): Promise<GetCategoryBySlugQuery> {
      return withWrapper(() =>
        client.request<GetCategoryBySlugQuery>(
          print(GetCategoryBySlugDocument),
          variables,
        ),
      )
    },
    getCategories(
      variables?: GetCategoriesQueryVariables,
    ): Promise<GetCategoriesQuery> {
      return withWrapper(() =>
        client.request<GetCategoriesQuery>(
          print(GetCategoriesDocument),
          variables,
        ),
      )
    },
    getComments(
      variables: GetCommentsQueryVariables,
    ): Promise<GetCommentsQuery> {
      return withWrapper(() =>
        client.request<GetCommentsQuery>(print(GetCommentsDocument), variables),
      )
    },
    CREATE_COMMENT(
      variables: Create_CommentMutationVariables,
    ): Promise<Create_CommentMutation> {
      return withWrapper(() =>
        client.request<Create_CommentMutation>(
          print(Create_CommentDocument),
          variables,
        ),
      )
    },
    getPageByUri(
      variables: GetPageByUriQueryVariables,
    ): Promise<GetPageByUriQuery> {
      return withWrapper(() =>
        client.request<GetPageByUriQuery>(
          print(GetPageByUriDocument),
          variables,
        ),
      )
    },
    getPages(variables?: GetPagesQueryVariables): Promise<GetPagesQuery> {
      return withWrapper(() =>
        client.request<GetPagesQuery>(print(GetPagesDocument), variables),
      )
    },
    getPostBySlug(
      variables: GetPostBySlugQueryVariables,
    ): Promise<GetPostBySlugQuery> {
      return withWrapper(() =>
        client.request<GetPostBySlugQuery>(
          print(GetPostBySlugDocument),
          variables,
        ),
      )
    },
    getFeaturedPost(
      variables?: GetFeaturedPostQueryVariables,
    ): Promise<GetFeaturedPostQuery> {
      return withWrapper(() =>
        client.request<GetFeaturedPostQuery>(
          print(GetFeaturedPostDocument),
          variables,
        ),
      )
    },
    getPosts(variables?: GetPostsQueryVariables): Promise<GetPostsQuery> {
      return withWrapper(() =>
        client.request<GetPostsQuery>(print(GetPostsDocument), variables),
      )
    },
    getAllPosts(
      variables?: GetAllPostsQueryVariables,
    ): Promise<GetAllPostsQuery> {
      return withWrapper(() =>
        client.request<GetAllPostsQuery>(print(GetAllPostsDocument), variables),
      )
    },
    getPostsByAuthor(
      variables?: GetPostsByAuthorQueryVariables,
    ): Promise<GetPostsByAuthorQuery> {
      return withWrapper(() =>
        client.request<GetPostsByAuthorQuery>(
          print(GetPostsByAuthorDocument),
          variables,
        ),
      )
    },
    getPostsByCategoryId(
      variables?: GetPostsByCategoryIdQueryVariables,
    ): Promise<GetPostsByCategoryIdQuery> {
      return withWrapper(() =>
        client.request<GetPostsByCategoryIdQuery>(
          print(GetPostsByCategoryIdDocument),
          variables,
        ),
      )
    },
    searchPosts(
      variables?: SearchPostsQueryVariables,
    ): Promise<SearchPostsQuery> {
      return withWrapper(() =>
        client.request<SearchPostsQuery>(print(SearchPostsDocument), variables),
      )
    },
    getSettings(
      variables?: GetSettingsQueryVariables,
    ): Promise<GetSettingsQuery> {
      return withWrapper(() =>
        client.request<GetSettingsQuery>(print(GetSettingsDocument), variables),
      )
    },
    getAuthorBySlug(
      variables: GetAuthorBySlugQueryVariables,
    ): Promise<GetAuthorBySlugQuery> {
      return withWrapper(() =>
        client.request<GetAuthorBySlugQuery>(
          print(GetAuthorBySlugDocument),
          variables,
        ),
      )
    },
    getAuthors(variables?: GetAuthorsQueryVariables): Promise<GetAuthorsQuery> {
      return withWrapper(() =>
        client.request<GetAuthorsQuery>(print(GetAuthorsDocument), variables),
      )
    },
  }
}
export type Sdk = ReturnType<typeof getSdk>
