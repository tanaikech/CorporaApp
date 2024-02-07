/**
 * GitHub  https://github.com/tanaikech/CorporaApp<br>
 * Library name
 * @type {string}
 * @const {string}
 * @readonly
 */
var appName = "CorporaApp";

// --- REST Resource: corpora https://ai.google.dev/api/rest/v1beta/corpora

/**
* ### Description
* Create a new corpus.
*
* @param {Object} requestBody Request body of [https://ai.google.dev/api/rest/v1beta/corpora/create](https://ai.google.dev/api/rest/v1beta/corpora/create).
* @returns {UrlFetchApp.HTTPResponse} HTTPResponse
*/
function createCorpus(requestBody) {
  return new CorporaApp_().createCorpus(requestBody);
}

/**
* ### Description
* Delete a corpus.
*
* @param {String} name Resource name of corpus. Ex. "corpora/my-corpus-123"
* @param {Boolean} force Default is false. If this is true, the corpus is deleted even when the documents are including. 
* @returns {UrlFetchApp.HTTPResponse} HTTPResponse
*/
function deleteCorpus(name, force = false) {
  return new CorporaApp_().deleteCorpus(name, force);
}

/**
* ### Description
* Get corpus list.
*
* @returns {Object[]} An array incluidng the metadata of corpora.
*/
function getCorpora() {
  return new CorporaApp_().getCorpora();
}

/**
* ### Description
* Search chunks from a corpus.
*
* @param {String} name Resource name of corpus. Ex. "corpora/my-corpus-123"
* @param {Object} requestBody Request body of [Method: corpora.query](https://ai.google.dev/api/rest/v1beta/corpora/query).
* @returns {UrlFetchApp.HTTPResponse} HTTPResponse
*/
function searchQueryFromCorpus(name, requestBody) {
  return new CorporaApp_().searchQueryFromCorpus(name, requestBody);
}

// --- REST Resource: corpora.documents https://ai.google.dev/api/rest/v1beta/corpora.documents

/**
* ### Description
* Create a new document.
*
* @param {String} name Resouece name of corpus. Ex. "corpora/my-corpus-123"
* @param {Object} requestBody Request body of [Method: corpora.documents.create](https://ai.google.dev/api/rest/v1beta/corpora.documents/create).
* @returns {UrlFetchApp.HTTPResponse} HTTPResponse
*/
function createDocument(name, requestBody) {
  return new CorporaApp_().createDocument(name, requestBody);
}

/**
* ### Description
* Delete a document.
*
* @param {String} name Document resource name. Ex. "corpora/my-corpus-123/documents/the-doc-abc". 
* @param {Boolean} force Default is false. If this is true, the document is deleted even when the chunks are including. 
* @returns {UrlFetchApp.HTTPResponse} HTTPResponse
*/
function deleteDocument(name, force = false) {
  return new CorporaApp_().deleteDocument(name, force);
}

/**
* ### Description
* Get document list.
*
* @param {String} name Resouece name of corpus. Ex. "corpora/my-corpus-123"
* @returns {Object[]} An array incluidng the metadata of document.
*/
function getDocuments(name) {
  return new CorporaApp_().getDocuments(name);
}

/**
* ### Description
* Search chunks from a document.
*
* @param {String} name Resource name of document. Ex. corpora/my-corpus-123/documents/the-doc-abc
* @param {Object} requestBody Request body of [Method: corpora.documents.query](https://ai.google.dev/api/rest/v1beta/corpora.documents/query).
* @returns {UrlFetchApp.HTTPResponse} HTTPResponse
*/
function searchQueryFromDocument(name, requestBody) {
  return new CorporaApp_().searchQueryFromDocument(name, requestBody);
}

// --- REST Resource: corpora.documents.chunks https://ai.google.dev/api/rest/v1beta/corpora.documents.chunks

/**
* ### Description
* Set chunks to a document.
*
* @param {String} name Resource name of document. Ex. corpora/my-corpus-123/documents/the-doc-abc
* @param {Object} requestBody Request body of [Method: corpora.documents.chunks.batchCreate](https://ai.google.dev/api/rest/v1beta/corpora.documents.chunks/batchCreate).
* @returns {UrlFetchApp.HTTPResponse[]} HTTPResponse[]
*/
function setChunks(name, requestBody) {
  return new CorporaApp_().setChunks(name, requestBody);
}

/**
* ### Description
* Delete chunks from a document.
*
* @param {String} name Resource name of document. Ex. corpora/my-corpus-123/documents/the-doc-abc
* @param {Object} requestBody Request body of [Method: corpora.documents.chunks.batchDelete](https://ai.google.dev/api/rest/v1beta/corpora.documents.chunks/batchDelete).
* @returns {UrlFetchApp.HTTPResponse} HTTPResponse
*/
function deleteChunks(name, requestBody) {
  return new CorporaApp_().deleteChunks(name, requestBody);
}

/**
* ### Description
* Get all chunks from a document.
*
* @param {String} name Resource name of document. Ex. corpora/my-corpus-123/documents/the-doc-abc
* @returns {Object[]} An array incluidng the chunks.
*/
function getChunks(name) {
  return new CorporaApp_().getChunks(name);
}

/**
* ### Description
* Update chunks of a document.
*
* @param {String} name Resource name of document. Ex. corpora/my-corpus-123/documents/the-doc-abc
* @param {Object} requestBody Request body of [Method: corpora.documents.chunks.batchUpdate](https://ai.google.dev/api/rest/v1beta/corpora.documents.chunks/batchUpdate).
* @returns {UrlFetchApp.HTTPResponse[]} HTTPResponse[]
*/
function updateChunks(name, requestBody) {
  return new CorporaApp_().updateChunks(name, requestBody);
}

// --- REST Resource: corpora.permissions https://ai.google.dev/api/rest/v1beta/corpora.permissions

/**
* ### Description
* Create permission of corpus.
*
* @param {String} name Resource name of corpus. Ex. "corpora/*"
* @param {Object} requestBody Request body of [Method: corpora.permissions.create](https://ai.google.dev/api/rest/v1beta/corpora.permissions/create).
* @returns {UrlFetchApp.HTTPResponse} HTTPResponse
*/
function createPermission(name, requestBody) {
  return new CorporaApp_().createPermission(name, requestBody);
}

/**
* ### Description
* Delete permission of corpus.
*
* @param {String} name Resource name of permission. Ex. "corpora/*\/permissions/*"
* @returns {UrlFetchApp.HTTPResponse} HTTPResponse
*/
function deletePermission(name) {
  return new CorporaApp_().deletePermission(name);
}

/**
* ### Description
* Get permission list of corpus.
*
* @param {String} name Resource name of corpus. Ex. "corpora/*"
* @returns {Object[]} An array incluidng the permissions.
*/
function getPermissions(name) {
  return new CorporaApp_().getPermissions(name);
}

/**
* ### Description
* Update permission of corpus.
*
* @param {String} name Resource name of permission. Ex. "corpora/*\/permissions/*"
* @param {Object} requestBody Request body of [Method: corpora.permissions.patch](https://ai.google.dev/api/rest/v1beta/corpora.permissions/patch).
* @param {Object} query Optional query parameters.
* @returns {UrlFetchApp.HTTPResponse} HTTPResponse
*/
function updatePermission(name, requestBody, query) {
  return new CorporaApp_().updatePermission(name, requestBody, query);
}


/**
 * 
 */
class CorporaApp_ {

  /**
  */
  constructor() {
    const apiVersion = "v1beta"; // If "v1" can be used, please modify this value.

    this.baseUrl = `https://generativelanguage.googleapis.com/${apiVersion}/`;
    this.headers = { authorization: "Bearer " + ScriptApp.getOAuthToken() };
  }

  /**
  * ### Description
  * Create a new corpus.
  *
  * @param {Object} requestBody Request body of [https://ai.google.dev/api/rest/v1beta/corpora/create](https://ai.google.dev/api/rest/v1beta/corpora/create).
  * @returns {UrlFetchApp.HTTPResponse} HTTPResponse
  */
  createCorpus(requestBody) {
    if (!requestBody) {
      throw new Error("Please set request body.");
    }
    return this.fetch_({
      url: `${this.baseUrl}corpora`,
      method: "POST",
      payload: JSON.stringify(requestBody),
      contentType: "application/json",
    });
  }

  /**
  * ### Description
  * Delete a corpus.
  *
  * @param {String} name Resource name of corpus. Ex. "corpora/my-corpus-123"
  * @param {Boolean} force Default is false. If this is true, the corpus is deleted even when the documents are including. 
  * @returns {UrlFetchApp.HTTPResponse} HTTPResponse
  */
  deleteCorpus(name, force = false) {
    if (!name) {
      throw new Error("Please set name 'corpora/*'.");
    }
    return this.fetch_({
      url: `${this.baseUrl}${name}`,
      method: "DELETE",
      payload: JSON.stringify({ force }),
      contentType: "application/json",
    });
  }

  /**
  * ### Description
  * Get corpus list.
  *
  * @returns {Object[]} An array incluidng the metadata of corpora.
  */
  getCorpora() {
    let corporaList = [];
    let pageToken = "";
    do {
      const url = `${this.baseUrl}corpora?pageSize=10&pageToken=${pageToken}`;
      const res = this.fetch_({ url });
      const obj = JSON.parse(res);
      if (obj.corpora && obj.corpora.length > 0) {
        corporaList = [...corporaList, ...obj.corpora];
      }
      pageToken = obj.nextPageToken;
    } while (pageToken);
    return corporaList;
  }

  /**
  * ### Description
  * Search chunks from a corpus.
  *
  * @param {String} name Resource name of corpus. Ex. "corpora/my-corpus-123"
  * @param {Object} requestBody Request body of [Method: corpora.query](https://ai.google.dev/api/rest/v1beta/corpora/query).
  * @returns {UrlFetchApp.HTTPResponse} HTTPResponse
  */
  searchQueryFromCorpus(name, requestBody) {
    if (!name || !requestBody) {
      throw new Error("Please set name 'corpora/*' of corpus and request body.");
    }
    return this.fetch_({
      url: `${this.baseUrl}${name}:query`,
      method: "POST",
      payload: JSON.stringify(requestBody),
      contentType: "application/json",
    });
  }


  /**
  * ### Description
  * Create a new document.
  *
  * @param {String} name Resouece name of corpus. Ex. "corpora/my-corpus-123"
  * @param {Object} requestBody Request body of [Method: corpora.documents.create](https://ai.google.dev/api/rest/v1beta/corpora.documents/create).
  * @returns {UrlFetchApp.HTTPResponse} HTTPResponse
  */
  createDocument(name, requestBody) {
    if (!name || !requestBody) {
      throw new Error("Please set name 'corpora/*' and request body.");
    }
    return this.fetch_({
      url: `${this.baseUrl}${name}/documents`,
      method: "POST",
      payload: JSON.stringify(requestBody),
      contentType: "application/json",
    });
  }

  /**
  * ### Description
  * Delete a document.
  *
  * @param {String} name Document resource name. Ex. "corpora/my-corpus-123/documents/the-doc-abc". 
  * @param {Boolean} force Default is false. If this is true, the document is deleted even when the chunks are including. 
  * @returns {UrlFetchApp.HTTPResponse} HTTPResponse
  */
  deleteDocument(name, force = false) {
    if (!name) {
      throw new Error("Please set name 'corpora/*/documents/*'.");
    }
    return this.fetch_({
      url: `${this.baseUrl}${name}`,
      method: "DELETE",
      payload: JSON.stringify({ force }),
      contentType: "application/json",
    });
  }

  /**
  * ### Description
  * Get document list.
  *
  * @param {String} name Resouece name of corpus. Ex. "corpora/my-corpus-123"
  * @returns {Object[]} An array incluidng the metadata of document.
  */
  getDocuments(name) {
    if (!name) {
      throw new Error("Please set name 'corpora/*'.");
    }
    let documentList = [];
    let pageToken = "";
    do {
      const url = `${this.baseUrl}${name}/documents?pageSize=20&pageToken=${pageToken}`;
      const res = this.fetch_({ url });
      const obj = JSON.parse(res);
      if (obj.documents && obj.documents.length > 0) {
        documentList = [...documentList, ...obj.documents];
      }
      pageToken = obj.nextPageToken;
    } while (pageToken);
    return documentList;
  }

  /**
  * ### Description
  * Search chunks from a document.
  *
  * @param {String} name Resource name of document. Ex. corpora/my-corpus-123/documents/the-doc-abc
  * @param {Object} requestBody Request body of [Method: corpora.documents.query](https://ai.google.dev/api/rest/v1beta/corpora.documents/query).
  * @returns {UrlFetchApp.HTTPResponse} HTTPResponse
  */
  searchQueryFromDocument(name, requestBody) {
    if (!name || !requestBody) {
      throw new Error("Please set name 'corpora/*/documents/*' and request body.");
    }
    return this.fetch_({
      url: `${this.baseUrl}${name}:query`,
      method: "POST",
      payload: JSON.stringify(requestBody),
      contentType: "application/json",
    });
  }

  /**
  * ### Description
  * Set chunks to a document.
  *
  * @param {String} name Resource name of document. Ex. corpora/my-corpus-123/documents/the-doc-abc
  * @param {Object} requestBody Request body of [Method: corpora.documents.chunks.batchCreate](https://ai.google.dev/api/rest/v1beta/corpora.documents.chunks/batchCreate).
  * @returns {UrlFetchApp.HTTPResponse[]} HTTPResponse[]
  */
  setChunks(name, requestBody) {
    if (!name || !requestBody || !requestBody.requests) {
      throw new Error("Please set name 'corpora/*/documents/*' and request body.");
    }
    const url = `${this.baseUrl}${name}/chunks:batchCreate`;
    const r = requestBody.requests.slice();
    const reqs = [...Array(Math.ceil(r.length / 100))].map(_ => r.splice(0, 100));
    console.log(`Total chunks are ${requestBody.requests.length}. ${reqs.length} API calls are used.`);
    const res = [];
    for (let i = 0; i < reqs.length; i++) {
      console.log(`${i + 1} / ${reqs.length}`);
      const object = {
        url,
        method: "POST",
        payload: JSON.stringify({ requests: reqs[i] }),
        contentType: "application/json",
      };
      res.push(this.fetch_(object));
    }
    return res;
  }

  /**
  * ### Description
  * Delete chunks from a document.
  *
  * @param {String} name Resource name of document. Ex. corpora/my-corpus-123/documents/the-doc-abc
  * @param {Object} requestBody Request body of [Method: corpora.documents.chunks.batchDelete](https://ai.google.dev/api/rest/v1beta/corpora.documents.chunks/batchDelete).
  * @returns {UrlFetchApp.HTTPResponse} HTTPResponse
  */
  deleteChunks(name, requestBody) {
    if (!name || !requestBody || !requestBody.requests) {
      throw new Error("Please set name 'corpora/*/documents/*' and request body.");
    }
    return this.fetch_({
      url: `${this.baseUrl}${name}/chunks:batchDelete`,
      method: "POST",
      payload: JSON.stringify(requestBody),
      contentType: "application/json",
    });
  }

  /**
  * ### Description
  * Get all chunks from a document.
  *
  * @param {String} name Resource name of document. Ex. corpora/my-corpus-123/documents/the-doc-abc
  * @returns {Object[]} An array incluidng the chunks.
  */
  getChunks(name) {
    if (!name) {
      throw new Error("Please set name 'corpora/*/documents/*'.");
    }
    let chunkList = [];
    let pageToken = "";
    do {
      const url = `${this.baseUrl}${name}/chunks?pageSize=100&pageToken=${pageToken}`;
      const res = this.fetch_({ url });
      const obj = JSON.parse(res);
      if (obj.chunks && obj.chunks.length > 0) {
        chunkList = [...chunkList, ...obj.chunks];
      }
      pageToken = obj.nextPageToken;
    } while (pageToken);
    return chunkList;
  }

  /**
  * ### Description
  * Update chunks of a document.
  *
  * @param {String} name Resource name of document. Ex. corpora/my-corpus-123/documents/the-doc-abc
  * @param {Object} requestBody Request body of [Method: corpora.documents.chunks.batchUpdate](https://ai.google.dev/api/rest/v1beta/corpora.documents.chunks/batchUpdate).
  * @returns {UrlFetchApp.HTTPResponse[]} HTTPResponse[]
  */
  updateChunks(name, requestBody) {
    if (!name || !requestBody || !requestBody.requests) {
      throw new Error("Please set name 'corpora/*/documents/*' and request body.");
    }
    const url = `${this.baseUrl}${name}/chunks:batchUpdate`;
    const r = requestBody.requests.slice();
    const reqs = [...Array(Math.ceil(r.length / 100))].map(_ => r.splice(0, 100));
    console.log(`Total chunks are ${requestBody.requests.length}. ${reqs.length} API calls are used.`);
    const res = [];
    for (let i = 0; i < reqs.length; i++) {
      console.log(`${i + 1} / ${reqs.length}`);
      const object = {
        url,
        method: "POST",
        payload: JSON.stringify({ requests: reqs[i] }),
        contentType: "application/json",
      };
      res.push(this.fetch_(object));
    }
    return res;
  }

  /**
  * ### Description
  * Create permission of corpus.
  *
  * @param {String} name Resource name of corpus. Ex. "corpora/*"
  * @param {Object} requestBody Request body of [Method: corpora.permissions.create](https://ai.google.dev/api/rest/v1beta/corpora.permissions/create).
  * @returns {UrlFetchApp.HTTPResponse} HTTPResponse
  */
  createPermission(name, requestBody) {
    if (!name || !requestBody) {
      throw new Error("Please set name 'corpora/*' and request body.");
    }
    return this.fetch_({
      url: `${this.baseUrl}${name}/permissions`,
      method: "POST",
      payload: JSON.stringify(requestBody),
      contentType: "application/json",
    });
  }

  /**
  * ### Description
  * Delete permission of corpus.
  *
  * @param {String} name Resource name of permission. Ex. "corpora/*\/permissions/*"
  * @returns {UrlFetchApp.HTTPResponse} HTTPResponse
  */
  deletePermission(name) {
    if (!name) {
      throw new Error("Please set name 'corpora/*/permissions/*'.");
    }
    return this.fetch_({
      url: `${this.baseUrl}${name}`,
      method: "DELETE",
    });
  }

  /**
  * ### Description
  * Get permission list of corpus.
  *
  * @param {String} name Resource name of corpus. Ex. "corpora/*"
  * @returns {Object[]} An array incluidng the permissions.
  */
  getPermissions(name) {
    if (!name) {
      throw new Error("Please set name 'corpora/*'.");
    }
    let permissionList = [];
    let pageToken = "";
    do {
      const url = `${this.baseUrl}${name}/permissions?pageSize=1000&pageToken=${pageToken}`;
      const res = this.fetch_({ url });
      const obj = JSON.parse(res);
      if (obj.permissions && obj.permissions.length > 0) {
        permissionList = [...permissionList, ...obj.permissions];
      }
      pageToken = obj.nextPageToken;
    } while (pageToken);
    return permissionList;
  }

  /**
  * ### Description
  * Update permission of corpus.
  *
  * @param {String} name Resource name of permission. Ex. "corpora/*\/permissions/*"
  * @param {Object} requestBody Request body of [Method: corpora.permissions.patch](https://ai.google.dev/api/rest/v1beta/corpora.permissions/patch).
  * @param {Object} query Optional query parameters.
  * @returns {UrlFetchApp.HTTPResponse} HTTPResponse
  */
  updatePermission(name, requestBody, query) {
    if (!name || !requestBody) {
      throw new Error("Please set name 'corpora/*/permissions/*' and request body.");
    }
    let qp = "";
    if (query) {
      qp = Object.entries(query).map(([k, v]) => `${k}=${encodeURIComponent(v)}`).join("&");
    }
    return this.fetch_({
      url: `${this.baseUrl}${name}${qp && ("?" + qp)}`,
      method: "PATCH",
      payload: JSON.stringify(requestBody),
      contentType: "application/json",
    });
  }

  /**
  * ### Description
  * Fetch API.
  *
  * @param {Object} object An object for fetching API.
  * @returns {UrlFetchApp.HTTPResponse} HTTPResponse
  */
  fetch_(object) {
    object.muteHttpExceptions = true;
    object.headers = this.headers;
    const res = UrlFetchApp.fetchAll([object])[0];
    if (res.getResponseCode() != 200) {
      throw new Error(res.getContentText());
    }
    return res;
  }
}
