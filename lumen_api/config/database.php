<?php
    return [
        'default' => 'mongodb',
        'connections' => [
            'mongodb' => [
                'driver' => 'mongodb',
                'host' => env('DB_HOST', 'localhost'),
                'port' => env('DB_PORT', 27017),
                'database' => env('DB_DATABASE', 'lumen'),

                'options' => [
                    // 'database' => 'admin', // sets the authentication database required by mongo 3
                    //'replicaSet' => 'replicaSetName',
                ]
            ],
        ],
        'migrations' => 'migrations',
    ];
