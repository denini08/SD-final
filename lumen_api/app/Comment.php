<?php

namespace App;

class Comment extends \Jenssegers\Mongodb\Eloquent\Model
{

    protected $fillable = [
        'autor', 'comment'
    ];

    public function setUpdatedAt($value)
    {
      return NULL;
    }

    public function setCreatedAt($value)
    {
      return NULL;
    }

}
