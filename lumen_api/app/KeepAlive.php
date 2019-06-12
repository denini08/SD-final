<?php

namespace App;

class KeepAlive
{
    public function __invoke()
    {
        print_r("um minuto");
    }
}
