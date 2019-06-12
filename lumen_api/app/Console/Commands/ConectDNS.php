<?php
/**
 *
 * PHP version >= 7.0
 *
 * @category Console_Command
 * @package  App\Console\Commands
 */

namespace App\Console\Commands;

use \GuzzleHttp\Client;
use Illuminate\Console\Command;
use App\Http\Controllers\AuthorController;

/**
 * Class deletePostsCommand
 *
 * @category Console_Command
 * @package  App\Console\Commands
 */
class ConectDNS extends Command
{
    /**
     * The console command name.
     *
     * @var string
     */
    protected $signature = "conect:dns";

    /**
     * The console command description.
     *
     * @var string
     */
    protected $description = "Conect to the DNS server";


    /**
     * Execute the console command.
     *
     * @return mixed
     */
    public function handle()
    {
        $address = env('DNS_ADDRESS', 'localhost:8000');
        $client = new Client();
        $request = $client->get($address);
        $response = $request->getBody()->getContents();
        echo "<pre>";
        print_r($response);
        exit;
    }

}
