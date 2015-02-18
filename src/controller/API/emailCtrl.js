/*
 * Copyright (C) 2015 TopCoder Inc., All Rights Reserved.
 *
 * Represents the email controller.
 *
 * @version 0.1.0
 * @author TCCODER
 */

'use strict';

/*!
 * Module dependencies
 */
var Email = require('../../utils/Email');

/**
 * Represents the email controller.
 */
module.exports = {
    /**
     * Represents the send controller.
     *
     * @param {Object} req  Express request.
     * @param {Object} res  Express response.
     */
    send: function (req, res) {
        var emailer = new Email(req.IDOL, req.SENDAPI);

        emailer
            .send(req.body)
            .then(
                res.json,
                function (error) {
                    res.status(error.status).json(error.json);
                });
    }
};
