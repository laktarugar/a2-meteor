class { '::mongodb::globals':
  manage_package_repo => true,
  version             => "3.0.6",
}->
class { '::mongodb::server':
  port    => 27018,
  verbose => true,
  auth    => true,
}

mongodb_database { 'testdb':
  ensure   => present,
  tries    => 10,
  require  => Class['mongodb::server'],
}


mongodb_user { 'testuser':
  name          => 'testuser',
  ensure        => present,
  password_hash => mongodb_password('testuser', 'p@ssw0rd'),
  database      => testdb,
  roles         => ['readWrite', 'dbAdmin'],
  tries         => 10,
  require       => Class['mongodb::server'],
}
