<?php

namespace App;

class Ad extends \Jenssegers\Mongodb\Eloquent\Model
{

    protected $collection = 'Ad';
    protected $primaryKey = '_id';

    protected $fillable = [
        'title', 'description', 'contact', 'createdBy'
    ];

    public function setUpdatedAt($value)
    {
      return NULL;
    }

    public function setCreatedAt($value)
    {
      return NULL;
    }

    public function comments()
    {
        return $this->embedsMany('App\Comment');
    }

}
