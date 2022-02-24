import * as ackeeTracker from 'ackee-tracker';

/**
 * Retrieve the Ackee website.
 * @returns {string} The ackee website.
 */
function getAckeeDomain() {
  return `https://${process.env.ACKEE_DOMAIN}`;
}

/**
 * Retrieve the domain Id.
 * @returns {string} The domain Id configured in Ackee settings.
 */
function getAckeeSiteId() {
  return process.env.ACKEE_SITE_ID;
}

/**
 * Create a new Ackee instance.
 * @returns An Ackee instance.
 */
function createAckeeInstance() {
  const domain = getAckeeDomain();

  return ackeeTracker.create(domain, {
    detailed: true,
    ignoreLocalhost: true,
    ignoreOwnVisits: true,
  });
}

/**
 * Create or update an Ackee record.
 * @param {*} instance An Ackee Instance
 */
function setAckeeRecord(instance) {
  const siteId = getAckeeSiteId();
  instance.record(siteId);
}

export { createAckeeInstance, setAckeeRecord };
