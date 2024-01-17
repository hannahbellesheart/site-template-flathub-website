/* tslint:disable */
/* eslint-disable */
/**
 * Flathub API
 * No description provided (generated by Openapi Generator https://github.com/openapitools/openapi-generator)
 *
 * The version of the OpenAPI document: 0.1.0
 *
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

// May contain unused imports in some cases
// @ts-ignore
import { Auths } from "./auths"

/**
 *
 * @export
 * @interface UserInfoReturn
 */
export interface UserInfoReturn {
  /**
   *
   * @type {boolean}
   * @memberof UserInfoReturn
   */
  is_moderator: boolean
  /**
   *
   * @type {boolean}
   * @memberof UserInfoReturn
   */
  is_quality_moderator: boolean
  /**
   *
   * @type {string}
   * @memberof UserInfoReturn
   */
  displayname: string
  /**
   *
   * @type {Array<string>}
   * @memberof UserInfoReturn
   */
  dev_flatpaks: Array<string>
  /**
   *
   * @type {Array<string>}
   * @memberof UserInfoReturn
   */
  owned_flatpaks: Array<string>
  /**
   *
   * @type {Array<string>}
   * @memberof UserInfoReturn
   */
  invited_flatpaks: Array<string>
  /**
   *
   * @type {string}
   * @memberof UserInfoReturn
   */
  invite_code: string
  /**
   *
   * @type {string}
   * @memberof UserInfoReturn
   */
  accepted_publisher_agreement_at: string
  /**
   *
   * @type {any}
   * @memberof UserInfoReturn
   */
  default_account: any | null
  /**
   *
   * @type {Auths}
   * @memberof UserInfoReturn
   */
  auths: Auths
}
