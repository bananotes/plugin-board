// tslint:disable
/**
 * Bananotes
 * No description provided (generated by Openapi Generator https://github.com/openapitools/openapi-generator)
 *
 * The version of the OpenAPI document: 1.0.0
 *
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import * as globalImportUrl from 'url';
import globalAxios, { AxiosPromise, AxiosInstance } from 'axios';
import { Configuration } from '../configuration';
// Some imports not used depending on template conditions
// @ts-ignore
import { BASE_PATH, COLLECTION_FORMATS, RequestArgs, BaseAPI, RequiredError } from '../base';
// @ts-ignore
import { InlineObject } from '../models';
// @ts-ignore
import { InlineResponse200 } from '../models';
// @ts-ignore
import { InlineResponse2001 } from '../models';
// @ts-ignore
import { InlineResponse2002 } from '../models';
// @ts-ignore
import { InlineResponse201 } from '../models';
// @ts-ignore
import { InlineResponse404 } from '../models';
/**
 * UserApi - axios parameter creator
 * @export
 */
export const UserApiAxiosParamCreator = function (configuration?: Configuration) {
  return {
    /**
     * Delete the specified user logically and mark the user as deleted. If the user does not exist, an error message is returned.
     * @summary TODO : Delete User
     * @param {string} [userId] ID
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    userDelete: async (userId?: string, options: any = {}): Promise<RequestArgs> => {
      const localVarPath = `/user`;
      const localVarUrlObj = globalImportUrl.parse(localVarPath, true);
      let baseOptions;
      if (configuration) {
        baseOptions = configuration.baseOptions;
      }
      const localVarRequestOptions = { method: 'DELETE', ...baseOptions, ...options };
      const localVarHeaderParameter = {} as any;
      const localVarQueryParameter = {} as any;

      if (userId !== undefined) {
        localVarQueryParameter['userId'] = userId;
      }

      localVarUrlObj.query = { ...localVarUrlObj.query, ...localVarQueryParameter, ...options.query };
      // fix override query string Detail: https://stackoverflow.com/a/7517673/1077943
      delete localVarUrlObj.search;
      let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
      localVarRequestOptions.headers = { ...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers };

      return {
        url: globalImportUrl.format(localVarUrlObj),
        options: localVarRequestOptions,
      };
    },
    /**
     * Get User details from database userId entries: all entries user posted on website invisibleEntries: all entriesId blocked
     * @summary Get User Info
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    userGet: async (options: any = {}): Promise<RequestArgs> => {
      const localVarPath = `/user`;
      const localVarUrlObj = globalImportUrl.parse(localVarPath, true);
      let baseOptions;
      if (configuration) {
        baseOptions = configuration.baseOptions;
      }
      const localVarRequestOptions = { method: 'GET', ...baseOptions, ...options };
      const localVarHeaderParameter = {} as any;
      const localVarQueryParameter = {} as any;

      localVarUrlObj.query = { ...localVarUrlObj.query, ...localVarQueryParameter, ...options.query };
      // fix override query string Detail: https://stackoverflow.com/a/7517673/1077943
      delete localVarUrlObj.search;
      let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
      localVarRequestOptions.headers = { ...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers };

      return {
        url: globalImportUrl.format(localVarUrlObj),
        options: localVarRequestOptions,
      };
    },
    /**
     * Create a new User userID: unique entries invisibleEntries  if userID already exist renturn error messag
     * @summary Create User
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    userPost: async (options: any = {}): Promise<RequestArgs> => {
      const localVarPath = `/user`;
      const localVarUrlObj = globalImportUrl.parse(localVarPath, true);
      let baseOptions;
      if (configuration) {
        baseOptions = configuration.baseOptions;
      }
      const localVarRequestOptions = { method: 'POST', ...baseOptions, ...options };
      const localVarHeaderParameter = {} as any;
      const localVarQueryParameter = {} as any;

      localVarUrlObj.query = { ...localVarUrlObj.query, ...localVarQueryParameter, ...options.query };
      // fix override query string Detail: https://stackoverflow.com/a/7517673/1077943
      delete localVarUrlObj.search;
      let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
      localVarRequestOptions.headers = { ...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers };

      return {
        url: globalImportUrl.format(localVarUrlObj),
        options: localVarRequestOptions,
      };
    },
    /**
     * Updating information of the user entries invisibleEntries If the user does not exist, an error message is returned.
     * @summary Update User Info
     * @param {string} userId
     * @param {InlineObject} [inlineObject]
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    userUserIdPut: async (userId: string, inlineObject?: InlineObject, options: any = {}): Promise<RequestArgs> => {
      // verify required parameter 'userId' is not null or undefined
      if (userId === null || userId === undefined) {
        throw new RequiredError(
          'userId',
          'Required parameter userId was null or undefined when calling userUserIdPut.',
        );
      }
      const localVarPath = `/user/{userId}`.replace(`{${'userId'}}`, encodeURIComponent(String(userId)));
      const localVarUrlObj = globalImportUrl.parse(localVarPath, true);
      let baseOptions;
      if (configuration) {
        baseOptions = configuration.baseOptions;
      }
      const localVarRequestOptions = { method: 'PUT', ...baseOptions, ...options };
      const localVarHeaderParameter = {} as any;
      const localVarQueryParameter = {} as any;

      localVarHeaderParameter['Content-Type'] = 'application/json';

      localVarUrlObj.query = { ...localVarUrlObj.query, ...localVarQueryParameter, ...options.query };
      // fix override query string Detail: https://stackoverflow.com/a/7517673/1077943
      delete localVarUrlObj.search;
      let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
      localVarRequestOptions.headers = { ...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers };
      const needsSerialization =
        typeof inlineObject !== 'string' || localVarRequestOptions.headers['Content-Type'] === 'application/json';
      localVarRequestOptions.data = needsSerialization
        ? JSON.stringify(inlineObject !== undefined ? inlineObject : {})
        : inlineObject || '';

      return {
        url: globalImportUrl.format(localVarUrlObj),
        options: localVarRequestOptions,
      };
    },
  };
};

/**
 * UserApi - functional programming interface
 * @export
 */
export const UserApiFp = function (configuration?: Configuration) {
  return {
    /**
     * Delete the specified user logically and mark the user as deleted. If the user does not exist, an error message is returned.
     * @summary TODO : Delete User
     * @param {string} [userId] ID
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    async userDelete(
      userId?: string,
      options?: any,
    ): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<InlineResponse2001>> {
      const localVarAxiosArgs = await UserApiAxiosParamCreator(configuration).userDelete(userId, options);
      return (axios: AxiosInstance = globalAxios, basePath: string = BASE_PATH) => {
        const axiosRequestArgs = { ...localVarAxiosArgs.options, url: basePath + localVarAxiosArgs.url };
        return axios.request(axiosRequestArgs);
      };
    },
    /**
     * Get User details from database userId entries: all entries user posted on website invisibleEntries: all entriesId blocked
     * @summary Get User Info
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    async userGet(
      options?: any,
    ): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<InlineResponse200>> {
      const localVarAxiosArgs = await UserApiAxiosParamCreator(configuration).userGet(options);
      return (axios: AxiosInstance = globalAxios, basePath: string = BASE_PATH) => {
        const axiosRequestArgs = { ...localVarAxiosArgs.options, url: basePath + localVarAxiosArgs.url };
        return axios.request(axiosRequestArgs);
      };
    },
    /**
     * Create a new User userID: unique entries invisibleEntries  if userID already exist renturn error messag
     * @summary Create User
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    async userPost(
      options?: any,
    ): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<InlineResponse201>> {
      const localVarAxiosArgs = await UserApiAxiosParamCreator(configuration).userPost(options);
      return (axios: AxiosInstance = globalAxios, basePath: string = BASE_PATH) => {
        const axiosRequestArgs = { ...localVarAxiosArgs.options, url: basePath + localVarAxiosArgs.url };
        return axios.request(axiosRequestArgs);
      };
    },
    /**
     * Updating information of the user entries invisibleEntries If the user does not exist, an error message is returned.
     * @summary Update User Info
     * @param {string} userId
     * @param {InlineObject} [inlineObject]
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    async userUserIdPut(
      userId: string,
      inlineObject?: InlineObject,
      options?: any,
    ): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<InlineResponse2002>> {
      const localVarAxiosArgs = await UserApiAxiosParamCreator(configuration).userUserIdPut(
        userId,
        inlineObject,
        options,
      );
      return (axios: AxiosInstance = globalAxios, basePath: string = BASE_PATH) => {
        const axiosRequestArgs = { ...localVarAxiosArgs.options, url: basePath + localVarAxiosArgs.url };
        return axios.request(axiosRequestArgs);
      };
    },
  };
};

/**
 * UserApi - factory interface
 * @export
 */
export const UserApiFactory = function (configuration?: Configuration, basePath?: string, axios?: AxiosInstance) {
  return {
    /**
     * Delete the specified user logically and mark the user as deleted. If the user does not exist, an error message is returned.
     * @summary TODO : Delete User
     * @param {string} [userId] ID
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    userDelete(userId?: string, options?: any): AxiosPromise<InlineResponse2001> {
      return UserApiFp(configuration)
        .userDelete(userId, options)
        .then(request => request(axios, basePath));
    },
    /**
     * Get User details from database userId entries: all entries user posted on website invisibleEntries: all entriesId blocked
     * @summary Get User Info
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    userGet(options?: any): AxiosPromise<InlineResponse200> {
      return UserApiFp(configuration)
        .userGet(options)
        .then(request => request(axios, basePath));
    },
    /**
     * Create a new User userID: unique entries invisibleEntries  if userID already exist renturn error messag
     * @summary Create User
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    userPost(options?: any): AxiosPromise<InlineResponse201> {
      return UserApiFp(configuration)
        .userPost(options)
        .then(request => request(axios, basePath));
    },
    /**
     * Updating information of the user entries invisibleEntries If the user does not exist, an error message is returned.
     * @summary Update User Info
     * @param {string} userId
     * @param {InlineObject} [inlineObject]
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    userUserIdPut(userId: string, inlineObject?: InlineObject, options?: any): AxiosPromise<InlineResponse2002> {
      return UserApiFp(configuration)
        .userUserIdPut(userId, inlineObject, options)
        .then(request => request(axios, basePath));
    },
  };
};

/**
 * UserApi - object-oriented interface
 * @export
 * @class UserApi
 * @extends {BaseAPI}
 */
export class UserApi extends BaseAPI {
  /**
   * Delete the specified user logically and mark the user as deleted. If the user does not exist, an error message is returned.
   * @summary TODO : Delete User
   * @param {string} [userId] ID
   * @param {*} [options] Override http request option.
   * @throws {RequiredError}
   * @memberof UserApi
   */
  public userDelete(userId?: string, options?: any) {
    return UserApiFp(this.configuration)
      .userDelete(userId, options)
      .then(request => request(this.axios, this.basePath));
  }

  /**
   * Get User details from database userId entries: all entries user posted on website invisibleEntries: all entriesId blocked
   * @summary Get User Info
   * @param {*} [options] Override http request option.
   * @throws {RequiredError}
   * @memberof UserApi
   */
  public userGet(options?: any) {
    return UserApiFp(this.configuration)
      .userGet(options)
      .then(request => request(this.axios, this.basePath));
  }

  /**
   * Create a new User userID: unique entries invisibleEntries  if userID already exist renturn error messag
   * @summary Create User
   * @param {*} [options] Override http request option.
   * @throws {RequiredError}
   * @memberof UserApi
   */
  public userPost(options?: any) {
    return UserApiFp(this.configuration)
      .userPost(options)
      .then(request => request(this.axios, this.basePath));
  }

  /**
   * Updating information of the user entries invisibleEntries If the user does not exist, an error message is returned.
   * @summary Update User Info
   * @param {string} userId
   * @param {InlineObject} [inlineObject]
   * @param {*} [options] Override http request option.
   * @throws {RequiredError}
   * @memberof UserApi
   */
  public userUserIdPut(userId: string, inlineObject?: InlineObject, options?: any) {
    return UserApiFp(this.configuration)
      .userUserIdPut(userId, inlineObject, options)
      .then(request => request(this.axios, this.basePath));
  }
}
