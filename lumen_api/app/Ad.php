<?php

namespace App;

class Ad extends \Jenssegers\Mongodb\Eloquent\Model
{

    protected $collection = 'Ad';
    protected $primaryKey = '_id';

    protected $fillable = [
        'title', 'description', 'contact', 'createdBy'
    ];

    public function createdBy()
    {
        return $this->embedsOne('App\CreatedBy');
    }

    public function comments()
    {
        return $this->embedsMany('App\Comment');
    }

}
