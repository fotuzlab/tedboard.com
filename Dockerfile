FROM osiolabs/drupaldevwithdocker-php:7.4
COPY docker-utils /var/docker-utils
# Setup Apache2 config
RUN cp /var/docker-utils/apache2/tedboard.conf /etc/apache2/sites-available/tedboard.conf
RUN a2enmod ssl
RUN a2ensite tedboard
RUN echo "setup complete"